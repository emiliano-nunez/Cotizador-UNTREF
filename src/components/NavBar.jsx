import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { userContext } from '../context/UserContext'

function NavBar() {

  // Se obtienen los datos del usuario
  const {logged, setLogged} = useContext(userContext)
  const actualUser = JSON.parse(localStorage.getItem('user'))

  // Se comprobara si el usuario ya ha iniciado sesión
  if (!logged) {
    return (
        <Login />
    )
  } else if (logged) {
    return (
      <>
        <nav className='nav'>
            <Link to="/cotizador" className='link'>
              <img src="/cotizador/src/assets/yourprop-bg.png" alt="icon" className='logo'/>
            </Link>
            <Link to="/home" className='link linkText'>Cotiza tu propiedad</Link>
            <Link to="/history" className='link linkText'>Historial de cotización</Link>
            <div className='user'>
              <p>{actualUser}</p>
              <svg width="24px" height="24px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_iconCarrier"> <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#729"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#729"></path> </g></svg>
            </div>
        </nav>
      </>
    )
  }
}

export default NavBar
