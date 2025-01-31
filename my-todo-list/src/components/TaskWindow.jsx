import React, { useState, useEffect } from "react";
import styles from '../styles/TaskWindow.module.css'

function TaskWindow({ tasks, deleteTask }) {
  const handleClick = (index) => {
    deleteTask(index);
  };

  return (
    <div className={styles.taskContainer}>
      <h2 className={styles}>Tasks:</h2>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div className={styles.tasks} key={index}>
            {task}
            <button className={styles.deleteButton} onClick={() => handleClick(index)}>X</button>
          </div>
        ))
      ) : (
        <p>No tasks added yet.</p>
      )}
    </div>
  );
}

export default TaskWindow;
