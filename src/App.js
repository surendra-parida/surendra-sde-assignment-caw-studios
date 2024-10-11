import './App.css';
import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      try {
        setTasks(JSON.parse(storedTasks));
      } catch (e) {
        console.error("Error parsing localStorage tasks:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks");
    }
  }, [tasks]);

  const updateTasks = (updatedTask) =>
    setTasks(tasks.map((task) => task.id === updatedTask.id ? updatedTask : task));

  const addTask = (task) => setTasks([...tasks, task]);

  const editTask = (id, newText) => {
    const task = tasks.find(task => task.id === id);
    if (task) updateTasks({ ...task, text: newText });
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const toggleComplete = (id) => {
    const task = tasks.find(task => task.id === id);
    if (task) updateTasks({ ...task, completed: !task.completed });
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask addTask={addTask} />
      <TaskFilter setFilter={setFilter} activeFilter={filter} />
      <TaskList
        tasks={filteredTasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
