import React from 'react';
import AuthForm from '../../components/custom/AuthForm';
import { useAuth } from '../../hooks/useauth';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/AuthForm.module.css';

const Register: React.FC = () => {
  const { register, error } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    if (email && password) { 
      register(email, password).then(() => {
        navigate('/login'); 
      }).catch(err => {
        console.error("Registration failed:", err.message);
      });
    } else {
      console.error('Email and password are required');
    }
  };

  return (
    <div className={styles.authPage}>
      <h1 className={styles.title}>Register</h1>
      <AuthForm
        onSubmit={handleRegister}
        buttonText="Register"
        text="Already have an account?"
        linkText="Login here"
        linkTo="/login"
        includeEmail={true}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Register;
