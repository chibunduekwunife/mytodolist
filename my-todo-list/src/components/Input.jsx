import React, { useState, useEffect } from 'react'

function Input({ addTask }) {

    const [ input, setInput ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(input)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write a task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Task Input"
            />
            <button type="submit">Add</button>

        </form>
    )
}

export default Input