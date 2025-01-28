import React, { useState, useEffect } from 'react'
import Input from './Input.jsx'

function TaskWindow({ tasks,  deleteTask }) {

    const handleClick = (index) => {
        deleteTask(index)
    }

    return (
        <div>
            <h2 className='text-3xl'>Tasks:</h2>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <div key={index}>
                        {task}
                        <button onClick={() => handleClick(index)}>X</button>
                    </div>
                ))
            ) : (
                <p>No tasks added yet.</p>
            )}
        </div>
    );
}

export default TaskWindow
