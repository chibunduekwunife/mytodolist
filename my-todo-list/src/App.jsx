import { useState } from 'react'
import TaskWindow from './components/TaskWindow'
import Input from './components/Input'

function App() {
  
  const [ task, setTask ] = useState([])

  const addTask = (task) => {
    setTask((prevTasks) => [...prevTasks, task])
  }

  const deleteTask = (index) => {
    setTask((prevTasks) => prevTasks.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h1>My TodoList</h1>
      <TaskWindow tasks={task} deleteTask={deleteTask}/>
      <Input addTask={addTask}/>
    </div>

  )
}

export default App
