import { useState } from 'React';

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task.name}</li>
      ))}
    </ul>
  );
}

export default TaskList;