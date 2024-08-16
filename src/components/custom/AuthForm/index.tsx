
import React, { useState } from 'react';
import styles from '../../../styles/AuthForm.module.css';

interface AuthFormProps {
  onSubmit: (username: string, email: string, password: string) => void;
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
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, email, password);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.formLabel}>Username</label>
          <input
            type="text"
            id="username"
            className={styles.formInput}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
