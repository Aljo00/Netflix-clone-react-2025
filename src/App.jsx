import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Landing from './pages/Landing'

const App = () => {
  return (
    <Routes>
      <Route path='/in' element={<Landing />} />
      <Route path='/' element={<Navigate to='/in' />} />
    </Routes>
  )
}

export default App