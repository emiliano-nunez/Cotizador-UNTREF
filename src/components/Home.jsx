import React, { useContext, useState } from 'react'
import { userContext } from '../context/UserContext'
import { toast } from 'sonner'
import NavBar from './NavBar'
import Login from './Login'

function Home() {

    // Constrantes para manejar el estado
    const [propertyType, setPropertyType] = useState('')
    const [location, setLocation] = useState('')
    const [rooms, setRooms] = useState('')
    const [meters, setMeters] = useState('')
    const [result, setResult] = useState('0.00')

    // Constantes para manejar el contexto
    const {addItem} = useContext(userContext)
    const {logged} = useContext(userContext)


    // Funciones para manejar el estado y guardar los datos de la cotización
    const handlePropertyType = (e) => {
        setPropertyType(e.target.value)
    }
    
    const handleLocation = (e) => {
        setLocation(e.target.value)
    }
    
    const handleRooms = (e) => {
        setRooms(e.target.value)
    }

    const handleMeters = (e) => {
        setMeters(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const costo = 314

        // Validaciones
        if (propertyType === '' || location === '' || rooms === '' || Number(meters) === 0 || meters === '') {
            toast('Por favor, rellene todos los campos')
        } else {
            let resultado = (costo * Number(propertyType) * Number(location) * Number(meters) * Number(rooms))
        
            // Promesa simulando una llamada
            const promise = () => new Promise((resolve) => setTimeout(() => resolve(), 1400));

            toast.promise(promise, {
                loading: 'Calculando costo',
                //Retorna un mensaje de exito o de error
                success: () => {
                    setResult(resultado.toFixed(2))
                    return 'Cotización calculada correctamente'
                },
                error: toast.error('La cotización no pudo ser calculada'),
            })
        }
    }

    // Esta función verifica si todos los campos requeridos están completos, si la cotización ha sido calculada, 
    // y luego guarda la cotización en el almacenamiento.
    const handleSave = () => {
        const typeTitle = datosPropiedad.find(item => item.factor == Number(propertyType))
        const locationTitle = datosUbicacion.find(item => item.factor == Number(location))
        const propRooms = datosHabitaciones.find(item => item.factor == Number(rooms))
        
        const actualUser = JSON.parse(localStorage.getItem('user'))

        if (
            rooms === '' || rooms === undefined ||
            location === '' || location === undefined ||
            propertyType === '' || propertyType === undefined ||
            meters === '' || meters === undefined
        ) {
            toast('Por favor, rellene todos los campos antes de guardar')
        } else if (result === '0.00') {
            toast('Por favor, calcula la cotización antes de guardar')
        } else{
            const newItem = {
                date: new Date(),
                user: actualUser,
                tipo: typeTitle.tipo,
                lugar: locationTitle.tipo,
                habs: propRooms.tipo,
                m2: meters,
                total: result
            }

            // Promesa simulando una llamada
            const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 900));

            toast.promise( promise, {
                loading: 'Guardando...',
                // Añade el elemento de la cotización
                success: () => {
                    addItem(newItem)
                    return 'Cotización de propiedad guardada'
                },
                error: toast.error('La cotización no pudo ser guardada'),
            })
        }
    }

    // Constantes para la cotización
    const datosPropiedad = [
        {tipo: 'PH', factor: 1.05},
        {tipo: 'Casa', factor: 1.25},
        {tipo: 'Departamento', factor: 1.10},
        {tipo: 'Oficina', factor: 1.225},
        {tipo: 'Local', factor: 1.5},
        {tipo: 'Cochera', factor: 1.91},
        {tipo: 'Bodega', factor: 1.9}
    ]

    const datosUbicacion = [
        {categoría: 'ubicacion', tipo: 'AMBA', factor: 1.93},
        {categoría: 'ubicacion', tipo: 'Bs.As', factor: 1.43},
        {categoría: 'ubicacion', tipo: 'CABA', factor: 1.83},
        {categoría: 'ubicacion', tipo: 'Catamarca', factor: 1.213},
        {categoría: 'ubicacion', tipo: 'Cordoba', factor: 1.71},
        {categoría: 'ubicacion', tipo: 'Entre Rios', factor: 1.3425},
        {categoría: 'ubicacion', tipo: 'Mendoza', factor: 1.913},
        {categoría: 'ubicacion', tipo: 'Neuquen', factor: 1.655},
        {categoría: 'ubicacion', tipo: 'Santa Fe', factor: 1.656},
        {categoría: 'ubicacion', tipo: 'Tucuman', factor: 1.4234},
        {categoría: 'ubicacion', tipo: 'Otro', factor: 1.5439}
    ]

    const datosHabitaciones = [
        {categoría: 'habitaciones', tipo: '1', factor: 1},
        {categoría: 'habitaciones', tipo: '2', factor: 1.2},
        {categoría: 'habitaciones', tipo: '3', factor: 1.5},
        {categoría: 'habitaciones', tipo: '4', factor: 1.8},
        {categoría: 'habitaciones', tipo: '5', factor: 2}
    ]

    // Comprueba el estado del contexto y redirige a la pantalla correspondiente
    if (!logged) {
        return <Login />
    } else {
        return (
            <>
                <NavBar />
                <section className='home-container'>
                    <header>
                        <h3>Cotizador de propiedades</h3>
                        <p>Cotiza tu propiedad gratuitamente a través de nuestra calculadora</p>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="propertyType">Tipo de propiedad</label>
                        <select name="propertyType" id='propertyType' onChange={handlePropertyType}>
                            <option value="">...</option>
                            {datosPropiedad.map((item, index) => <option key={index} value={item.factor}>{item.tipo}</option>)}
                        </select>
                        <label htmlFor="location">Ubicación de la propiedad</label>
                        <select name="location" id='location' onChange={handleLocation}>
                            <option value="">...</option>
                            {datosUbicacion.map(item => <option key={item.tipo} value={item.factor}>{item.tipo}</option>)}
                        </select>
                        <label htmlFor="rooms">Número de habitaciones</label>
                        <select name="rooms" id='rooms' onChange={handleRooms}>
                            <option value="">...</option>
                            {datosHabitaciones.map(item => <option key={item.tipo} value={item.factor}>{item.tipo}</option>)}
                        </select>
                        <label htmlFor="meters">Ingresa los metros cuadrados</label>
                        <input type="number" id='meters' onChange={handleMeters} />
                        <button type="submit">Cotizar</button>
                    </form>
                    <section>
                        <p className='price'>Precio estimado: ${result}</p>
                        <button onClick={handleSave}>Guardar cotización</button>
                    </section>
                </section>
            </>
        )
    }
}

export default Home
