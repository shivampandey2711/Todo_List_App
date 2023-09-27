import React, { useState, useEffect } from 'react';
import Task from './Task';

function TodoList({ currentUser }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filterCompleted, setFilterCompleted] = useState(false);

  useEffect(() => {
    // Load tasks from local storage when the component mounts
    const savedTasks = JSON.parse(localStorage.getItem(currentUser)) || [];
    const filteredTasks = filterCompleted ? savedTasks.filter(task => task.completed) : savedTasks;
    setTasks(filteredTasks);
  }, [currentUser, filterCompleted]);

  const saveTasksToLocalStorage = updatedTasks => {
    localStorage.setItem(currentUser, JSON.stringify(updatedTasks));
  };

  const addTask = () => {
    if (newTask.trim() === '') return;

    const updatedTasks = [
      ...tasks,
      { id: Date.now(), title: newTask, completed: false, dueDate: '', priority: 'medium' },
    ];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    setNewTask('');
  };

  const deleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const completeTask = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <label>
        Show Completed Tasks:
        <input
          type="checkbox"
          checked={filterCompleted}
          onChange={() => setFilterCompleted(!filterCompleted)}
        />
      </label>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} onDelete={deleteTask} onComplete={completeTask} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
