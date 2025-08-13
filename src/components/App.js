import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  // CORRECTION 1: Added proper state management for tasks and category filtering
  // - Initialized tasks with imported TASKS data
  // - Added selectedCategory state with default "All"
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // CORRECTION 2: Fixed task deletion handler
  // - Now properly filters out the deleted task by text content
  // - Uses strict comparison to ensure correct task is removed
  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task.text !== taskToDelete.text));
  };

  // CORRECTION 3: Fixed new task submission
  // - Now properly structures the new task object
  // - Explicitly includes both text and category properties
  const handleAddTask = (newTask) => {
    setTasks([...tasks, { 
      text: newTask.text, 
      category: newTask.category 
    }]);
  };

  // CORRECTION 4: Fixed category filtering logic
  // - Added proper ternary operator for "All" category case
  // - Uses strict equality comparison for category matching
  const filteredTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      
      {/* CORRECTION 5: Added all required props to CategoryFilter */}
      <CategoryFilter 
        categories={CATEGORIES}                       // Pass all categories
        selectedCategory={selectedCategory}           // Current selected category
        onSelectCategory={setSelectedCategory}        // Category change handler
      />
      
      {/* CORRECTION 6: Properly configured NewTaskForm */}
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== "All")}  // Filter out "All"
        onTaskFormSubmit={handleAddTask}             // Proper submit handler
      />
      
      {/* CORRECTION 7: Connected TaskList with proper props */}
      <TaskList 
        tasks={filteredTasks}                        // Pass filtered tasks
        onDeleteTask={handleDeleteTask}              // Pass delete handler
      />
    </div>
  );
}

export default App;