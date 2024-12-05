import { useState } from 'React'
import TaskList from './TaskList';
import AddTask from './AddTask';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName }]);
  };

  return (
    <div>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default TaskManager;