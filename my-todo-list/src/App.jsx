import { useState } from 'react'
import TaskWindow from './components/TaskWindow'
import Input from './components/Input'
import styles from './styles/App.module.css'

function App() {
  
  const [ task, setTask ] = useState([])

  const addTask = (task) => {
    setTask((prevTasks) => [...prevTasks, task])
  }

  const deleteTask = (index) => {
    setTask((prevTasks) => prevTasks.filter((_, i) => i !== index))
  }

  return (
    <div className={styles.mainContainer}>
      <h1>My TodoList</h1>
      <TaskWindow tasks={task} deleteTask={deleteTask}/>
      <Input addTask={addTask}/>
    </div>

  )
}

export default App
