import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ActiveTodos from './components/ActiveTodos/ActiveTodos'
import InactiveTodos from './components/InactiveTodos/InactiveTodos'
import TodosPage from './components/TodosPage/TodosPage'
import UserPage from './components/UserPage/UserPage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<UserPage />} />
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/active' element={<ActiveTodos />} />
        <Route path='/inactive' element={<InactiveTodos/>} />
      </Routes>
    </div>
  )
}

export default App



