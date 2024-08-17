
import { createContext, useState, useContext, ReactNode } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  type: 'SOD' | 'EOD';
}

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
