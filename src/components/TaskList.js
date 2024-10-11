import React from "react";

function TaskList({ tasks, editTask, deleteTask, toggleComplete }) {
  const handleEdit = (task) => {
    const newText = prompt("Edit task:", task.text);
    if (newText?.trim()) {
      editTask(task.id, newText);
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span className={task.completed ? "completed" : ""}>
            {task.text}
          </span>
          <button className="edit" onClick={() => handleEdit(task)}>Edit</button>
          <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
