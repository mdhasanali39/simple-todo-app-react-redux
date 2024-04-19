import { Toaster } from 'react-hot-toast'
import './App.css'
import TaskPanel from './components/TaskPanel/TaskPanel'

function App() {

  return (
    <>
      <div>
        <TaskPanel/>
        <Toaster/>
      </div>
    </>
  )
}

export default App
