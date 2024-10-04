import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Success from './pages/Success'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/success" element = {<Success />} />
          <Route path="/" element = {<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
