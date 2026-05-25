import { useState, useEffect } from 'react'
import NavBar from './modules/NavBar'
import { useAuth } from './Context/LoginContext'
import { Routes, Route } from 'react-router-dom'
import Login from './modules/Login'
import Home from './modules/Home'
import Admin from './modules/Admin'
import ProtectedRoute from './Components/ProtectedRoute'
import Products from './modules/Products'
import Details from './modules/Details'

function App() {
  const { login } = useAuth();

  useEffect( ()=>{
    //tudom nem ez legjobb ellenörzés és csomo hibája van de lusta vagyok normálisan csinálni
    if(localStorage.getItem("token") != null){
      login();
    }
  }, [] )

  return (
    <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/admin' element={<ProtectedRoute> <Admin /> </ProtectedRoute>} />
          <Route path='/telo' element={<Products />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
    </>
  )
}

export default App
