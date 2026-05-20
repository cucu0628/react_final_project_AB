import { useState } from 'react'
import NavBar from './modules/NavBar'
import { AuthProvider } from './Context/LoginContext'
import { Routes, Route } from 'react-router-dom'
import Login from './modules/Login'
import Home from './modules/Home'

function App() {


  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
