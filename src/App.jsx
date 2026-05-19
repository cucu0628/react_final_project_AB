import { useState } from 'react'
import NavBar from './modules/NavBar'
import { AuthProvider } from './Context/LoginContext'

function App() {


  return (
    <>
      <AuthProvider>
        <NavBar />
      </AuthProvider>
    </>
  )
}

export default App
