import { useState } from 'React';

function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName(''); // Reset input after adding task
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={handleInputChange}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
