import AuthForm from '../../components/custom/AuthForm';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/AuthForm.module.css';

const Login: React.FC = () => {
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (username: string, email: string, password: string) => {
  
    login(username, password).then(() => {
      navigate('/dashboard'); 
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
        linkTo="/register"
        includeEmail={false} 
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Login;
