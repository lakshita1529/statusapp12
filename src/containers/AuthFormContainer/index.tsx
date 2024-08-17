
import styles from '../../styles/AuthForm.module.css';

interface AuthFormContainerProps {
  children: React.ReactNode;
  title: string;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({ children, title }) => {
  return (
    <div className={styles.authPage}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.formContainer}>
        {children}
      </div>
    </div>
  );
};

export default AuthFormContainer;
