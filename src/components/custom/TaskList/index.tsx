
import  { useState, useEffect } from 'react';
import { getTasks } from '../../../lib/utils/firebase';
import { TaskListContainer, TaskItem } from '../../shared/AppStyle';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);

  return (
    <TaskListContainer>
      <h2>Your Tasks</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map(task => (
            <TaskItem key={task.id}>
              <h5>{task.title}</h5>
              <p>{task.description}</p>
              <small>{new Date(task.timestamp).toLocaleString()}</small>
            </TaskItem>
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}
    </TaskListContainer>
  );
};

export default TaskList;
