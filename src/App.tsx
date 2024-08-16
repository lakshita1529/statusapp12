import AppRoutes from './routes/AppRoutes'; 
import { AuthProvider } from './contexts/AuthContext'; 

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRoutes /> 
    </AuthProvider>
  );
};

export default App;
