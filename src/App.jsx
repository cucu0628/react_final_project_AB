import { useState } from 'react'
import NavBar from './modules/NavBar'
import { AuthProvider } from './Context/LoginContext'
import { Routes, Route } from 'react-router-dom'
import Login from './modules/Login'
import Home from './modules/Home'
import Admin from './modules/Admin'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {


  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/admin' element={<ProtectedRoute> <Admin /> </ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
