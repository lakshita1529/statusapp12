import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/LoginPage';
import Register from '../../pages/RegisterPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Login />} /> 
    </Routes>
  );
};

export default AppRoutes;
