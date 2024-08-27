import React, { useContext, useState } from 'react'
import { toast } from 'sonner'
import { userContext } from '../context/UserContext'

function Login() {

    // Constantes para manejar el contexto
    const {logged, setLogged} = useContext(userContext)

    // Constantes para manejar el estado
    const [user, setUser] = useState('')
    const [age, setAge] = useState(0)
    const [password, setPassword] = useState('') 
    const [userError, setUserError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [ageError, setAgeError] = useState('')


    // Maneja el input de "user" y valida si está vacio o es menor de 3 caracteres, actualizando el estado
    const handleUser = (e) => {
        let newUser = e.target.value
        
        if (newUser === '') {
            setUserError('El usuario no puede estar vacio')
        }else if (newUser.length < 3 ) {
            setUserError('El usuario debe tener al menos 3 caracteres')
        } else {
            setUserError('')
            setUser(e.target.value)
        }
    }

    // Maneja el input de "password" y valida si esta vacio o es menor de 5 caracteres, actualizando el estado
    const handlePassword = (e) => {
        let newPassword = e.target.value
        
        if (newPassword === '') {
            setPasswordError('La contraseña no puede estar vacia')  
        } else if (newPassword.length < 4) {
            setPasswordError('La contraseña debe tener al menos 5 caracteres')
            setPassword(e.target.value)
        } else {
            setPasswordError('')
            setPassword(e.target.value)
        }
    }

    // Maneja el input de "age" y valida si es mayor de 18, igual a 0 o mayor de 100, actualizando el estado
    const handleAge = (e) => {
        let newAge = e.target.value

        if (newAge < 18) {
            setAgeError('No eres mayor de edad')
        } else if (newAge === 0 || newAge > 100) {
            setAgeError('Ingresa una edad valida')
        } else if (newAge >= 18){
            setAgeError('')
            setAge(newAge)
        } else {
            setAgeError('')
            setAge(newAge)
        }
    }

    // Funcion para manejar el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault()

        // Validaciones
        if (user === '' || password === '', user === '' && password === '') {
            toast.error('Por favor, rellene todos los campos')
        } else if (user !== '' && password === 'admin' && age >= 18 && age < 100 && age !== 0) {
            toast.success('Credenciales correctas')
            // Guarda los datos en el localStorage y actualiza el estado
            setLogged(true)
            localStorage.setItem('user', JSON.stringify(user))
        } else if (age > 100 || age === 0) {
            toast.error('Ingresa una edad valida')
        } else {
            toast.error('Credenciales incorrectas')
        }
    }

    return (
        <>
            <img src="/cotizador/src/assets/yourprop-bg.png" alt="icon" className='logo'/>
            <section className='login'>
                <h2>Ingresa tus datos para la cotización</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="user">Ingresa tu usuario</label>
                    <input type="text" id='user' onChange={handleUser} />
                    <span className='error'>{userError}</span>
                    <label htmlFor="age">Ingresa tu edad</label>
                    <input type="number" id='age' onChange={handleAge} />
                    <span className='age error'>{ageError}</span>
                    <label htmlFor="password">Ingresa tu contraseña</label>
                    <input type="password" id='password' onChange={handlePassword} />
                    <span className='error'>{passwordError}</span>
                    <button type="submit">Ingresar</button>
                </form>
            </section>
        </>
    )
}

export default Login
