import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
        className="delete" 
        onClick={onDelete}
        aria-label={`Delete ${text}`}
      >
        X
      </button>
    </div>
  );
}

export default Task;