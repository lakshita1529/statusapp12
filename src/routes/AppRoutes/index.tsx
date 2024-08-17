import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/LoginPage';
import Register from '../../pages/RegisterPage';
import Dashboard from '../../pages/DahboardPage';
import TaskCreation from '../../pages/TaskCreationPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-task" element={<TaskCreation />} />

    </Routes>
  );
};

export default AppRoutes;
