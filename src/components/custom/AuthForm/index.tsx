import { useState } from 'react';
import styles from '../../../styles/AuthForm.module.css';

interface AuthFormProps {
  onSubmit: (email: string, password: string) => void;
  buttonText: string;
  text?: string;
  linkText?: string;
  linkTo?: string;
  includeEmail?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  buttonText,
  text,
  linkText,
  linkTo,
  includeEmail = true,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) { 
      onSubmit(email, password);
    } else {
      console.error('Email and password are required');
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {includeEmail && (
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input
              type="email"
              id="email"
              className={styles.formInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>Password</label>
          <input
            type="password"
            id="password"
            className={styles.formInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.formButton}>{buttonText}</button>
        {text && linkText && linkTo && (
          <p className={styles.formText}>
            {text} <a href={linkTo} className={styles.formLink}>{linkText}</a>
          </p>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
