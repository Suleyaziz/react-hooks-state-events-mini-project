import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // Initialize form state with empty text and first category as default
  const [formData, setFormData] = useState({
    text: '',
    category: categories[0] // categories prop already filtered to exclude "All"
  });

  // Handle input changes for both text and category
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    
    // Create new task object
    const newTask = {
      text: formData.text,
      category: formData.category
    };
    
    // Pass new task up to parent component
    onTaskFormSubmit(newTask);
    
    // Reset form
    setFormData({
      text: '',
      category: categories[0] // Reset to first category
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={formData.text} // Controlled input
          onChange={handleChange} 
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={formData.category} // Controlled select
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;