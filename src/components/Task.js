// Task.js (Updated)
import React from 'react';

function Task({ task, onDelete, onComplete }) {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.title}
      </span>
      <span>Due: {task.dueDate}</span>
      <span>Priority: {task.priority}</span> {/* Display the priority */}
      <button onClick={() => onComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default Task;
