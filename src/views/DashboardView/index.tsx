// src/views/Dashboard.tsx
import React from 'react';
import TaskForm from '../../components/custom/TaskForm';


const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <TaskForm />
    
    </div>
  );
};

export default Dashboard;
