// src/pages/TaskCreationPage.tsx
import React from 'react';
import TaskForm from '../../components/custom/TaskForm';

const TaskCreationPage: React.FC = () => {
  return (
    <div className="container mt-5">
      <TaskForm />
    </div>
  );
};

export default TaskCreationPage;
