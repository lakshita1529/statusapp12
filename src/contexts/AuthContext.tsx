import  { createContext, useState, ReactNode } from 'react';
import { login as firebaseLogin, register as firebaseRegister } from '../lib/utils/firebase';

interface User {
  email: string;
}

interface AuthContextProps {
  user: User | null;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      await firebaseLogin(email, password);
      setUser({ email });
      setError(null);
    } catch (err: any) {
      console.error("Login error:", err.message);
      setError('Login failed. Please check your credentials.');
    }
  };

  const register = async (email: string, password: string) => {
    try {
      await firebaseRegister(email, password);
      setUser({ email });
      setError(null);
    } catch (err: any) {
      console.error("Registration error:", err.message);
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
