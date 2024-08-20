import React from 'react';
import AuthForm from '../../components/custom/AuthForm';
import { useAuth } from '../../hooks/useauth';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/AuthForm.module.css';

const Login: React.FC = () => {
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    login(email, password).then(() => {
      navigate('/dashboard');
    }).catch((err) => {
      console.error('Login failed:', err);
    });
  };

  return (
    <div className={styles.authPage}>
      <h1 className={styles.title}>Login</h1>
      <AuthForm
        onSubmit={handleLogin}
        buttonText="Login"
        text="Don't have an account?"
        linkText="Register here"
        linkTo="/"
        includeEmail={true}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Login;
