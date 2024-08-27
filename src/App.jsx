import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import History from './components/History'
import UserContext from './context/UserContext'
import NavBar from './components/NavBar'
import './App.css'
import SocialWebs from './components/SocialWebs'
import { Toaster } from 'sonner'

/*

  Realizado por: Emiliano Núñez

  Revisar el README.md

*/ 

function App() {
  return (
    <UserContext>
      {/* Sonner API */}
      <Toaster className="toaster" position="bottom-right" richColors/>
      <main>
        {/* Rutas de la aplicación */}
        <BrowserRouter>
          <Routes>
            <Route path="/cotizador" element={<NavBar />}/>
            <Route path="/" element={<NavBar />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/history" element={<History />}/>
          </Routes>
        </BrowserRouter>
      </main>
      {/* Footer */}
      <SocialWebs />
    </UserContext>
  )
}

export default App
