import React, { useEffect, useState } from 'react'
import 'styles/App.css'
import 'styles/header.css'
import 'styles/menu.css'
import 'styles/mensajes.css'
import 'styles/login.css'
import Header from 'pages/Header'
import Menu from 'pages/Menu'
import AppContent from 'pages/AppContent'
import RegistroUsuario from 'pages/RegistroUsuario'
import Login from 'pages/Login'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if (user) {
      setUser(user)
    }
  }, [])
  return (
    user !== null
      ? <>
         <Header />
         <Menu />
         <AppContent />
       </>
      : <Routes>
          <Route
            path="/*"
            element={
              <div>
                <Login />
              </div>
            }
          />
          <Route
            path="/registro"
            element={
              <div>
                <RegistroUsuario />
              </div>
            }
          />
        </Routes>
  )
}
