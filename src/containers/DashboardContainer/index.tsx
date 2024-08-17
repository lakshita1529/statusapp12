
import { useAuth } from '../../hooks/useauth';
import TaskList from '../../components/custom/TaskList';
import CreateTaskButton from '../../components/base/TaskButton';
import { Dashboard } from '../../components/shared/AppStyle';

const DashboardContainer: React.FC = () => {
  const { user } = useAuth();

  return (
    <Dashboard>
      <h1>Welcome, {user?.email}</h1>
      <CreateTaskButton />
      <TaskList />
    </Dashboard>
  );
};

export default DashboardContainer;
