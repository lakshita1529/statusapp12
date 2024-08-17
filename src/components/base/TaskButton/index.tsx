
import { useNavigate } from 'react-router-dom';
import { CreateTaskButton as StyledCreateTaskButton } from '../../shared/AppStyle';

const CreateTaskButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create-task');
  };

  return (
    <StyledCreateTaskButton onClick={handleClick}>
      Create Task
    </StyledCreateTaskButton>
  );
};

export default CreateTaskButton;
