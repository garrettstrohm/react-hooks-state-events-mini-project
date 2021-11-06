import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[tasks, setTasks] = useState(TASKS)
  // const[selected, setSelected] = useState(false)
  

  const handleDelete = (text) => {
    setTasks(tasks.filter(task => task.text !== text))
  }

  const handleSortByCategory = (category) => {
    if(category.toLowerCase() === ("All").toLowerCase()) {
      setTasks(TASKS)
    } else {
      setTasks(TASKS.filter(task => task.category === category))
    }
  }
  
const onTaskFormSubmit = (newTask) => {
  setTasks([...tasks, newTask])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleSortByCategory={handleSortByCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
