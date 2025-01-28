import { useState } from 'react'
import TaskWindow from './components/TaskWindow'
import Input from './components/Input'

function App() {
  
  const [ task, setTask ] = useState([])

  const addTask = (task) => {
    setTask((prevTasks) => [...prevTasks, task])
  }

  return (
    <div>
      <h1>My TodoList</h1>
      <TaskWindow tasks={task}/>
      <Input addTask={addTask}/>
    </div>

  )
}

export default App
