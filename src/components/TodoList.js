// TodoList.js
import React, { useState } from 'react';
import Task from './Task';

function TodoList({ currentUser }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    // Implement task creation and storage logic here
  };

  const deleteTask = (taskId) => {
    // Implement task deletion logic here
  };

  const completeTask = (taskId) => {
    // Implement task completion logic here
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onComplete={completeTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

