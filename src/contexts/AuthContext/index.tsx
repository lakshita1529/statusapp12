import React, { createContext, useState, ReactNode } from 'react';
import { login as firebaseLogin, register as firebaseRegister } from '../../lib/firebase';

interface User {
  username?: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    try {
      // Convert username to email format or fetch the email associated with the username
      // Assuming the username is an actual email
      await firebaseLogin(username, password);
      setUser({ username, email: username });
      setError(null);
    } catch (err) {
      console.error("Login error:", err);
      setError('Login failed. Please check your credentials.');
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      await firebaseRegister(email, password);
      setUser({ username, email });
      setError(null);
    } catch (err) {
      console.error("Registration error:", err);
      setError('Registration failed. Please try again.');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
