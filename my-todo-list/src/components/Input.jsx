import React, { useState, useEffect } from 'react'
import styles from '../styles/Input.module.css'

function Input({ addTask }) {

    const [ input, setInput ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(input)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit} className={styles.taskForm}>
            <input
                type="text"
                placeholder="Write a task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Task Input"
                className={styles.taskInput}
            />
            <button type="submit" className={styles.submitButton}>Add</button>

        </form>
    )
}

export default Input