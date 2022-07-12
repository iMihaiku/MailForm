import React from 'react'
import Mensajes from 'pages/Mensajes'
import { Route, Routes } from 'react-router-dom'
import { MensajesContext } from 'context/MensajesContext'

export default function AppContent() {
  return (
    <MensajesContext>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App-content">
              <Mensajes />
            </div>
          }
        />
        <Route
          path="/favoritos"
          element={
            <div className="App-content">
              <Mensajes path="/favoritos" />
            </div>
          }
        />

        <Route
          path="/setAPI"
          element={
            <div className="App-content">
              <Mensajes path="/favoritos" />
            </div>
          }
        />
        <Route path="/configAPI" element={
        <div className="App-content">
          <Mensajes path='/favoritos' />
        </div>
        } />
        <Route path="/infoAPI" element={
        <div className="App-content">
          <Mensajes path='/favoritos' />
        </div>
        } />
      </Routes>
    </MensajesContext>
  )
}
