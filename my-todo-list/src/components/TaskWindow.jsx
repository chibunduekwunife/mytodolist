import React, { useState, useEffect } from 'react'
import Input from './Input.jsx'

function TaskWindow({ tasks }) {

    return (
        <div>
            <h2>Tasks:</h2>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <div key={index}>{task}</div>
                ))
            ) : (
                <p>No tasks added yet.</p>
            )}
        </div>
    );
}

export default TaskWindow
