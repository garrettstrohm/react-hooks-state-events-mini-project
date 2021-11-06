import React from "react";
import {useState} from "react"

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskText, setTaskText] = useState("")
  const [taskCategory, setTaskCategory] = useState('Code')

  const renderOptions =
    categories.map(category => {
      if(category.toLowerCase() !== ("All").toLowerCase()) {
        return <option key={category} value={category}>{category}</option>
      } else {
        return null
      }
    })


  const newTaskText = (e) => setTaskText(e.target.value)
  

  const newTaskCategory = (e) => setTaskCategory(e.target.value)

  const newTask ={
    text: taskText,
    category: taskCategory
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(newTask)
    setTaskCategory("")
    setTaskText("")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={newTaskText}/>
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={newTaskCategory}>
          {renderOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
