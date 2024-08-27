import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'
import NavBar from './NavBar'
import Login from './Login'
import { toast } from 'sonner'

function History() {

    // Constantes para manejar el contexto
    const {userHistory, setUserHistory} = useContext(userContext)
    const {logged} = useContext(userContext)

    // Elimina el listado de historial del usuario y proporciona una opción para restaurarlo.
    const handleDeleteList = () => {
        let savedList = JSON.parse(localStorage.getItem('userHistory'))

        toast.warning('Se eliminará el listado', {
            action: {
              label: 'Deshacer',
              onClick: () => {
                  setUserHistory(savedList)
                  localStorage.setItem('userHistory', JSON.stringify(savedList))
                  toast('Listado restaurado')
              }
            },
          })
        setUserHistory([])
        localStorage.removeItem('userHistory')
    }

    // Comprueba si el usuario ya ha iniciado sesión y si el listado de historial no esta vacío. Redirigiendo a la página correspondiente.
    if (!logged) {
        return <Login />
    } else if (userHistory.length === 0) {
        return (
            <>
                <NavBar />
                <main className='history-container'>
                    <h3>Guarda tu cotización y la verás aquí</h3>
                </main>
            </>
        )
    } else {
        return (
            <>
                <NavBar />
                <main className='history-container'>
                    <h3>Historial</h3>
                    <ul>
                        {/* Muestra el historial de cotización segun el usuario */}
                        {userHistory.map((item, index) => 
                            <li key={index}> 
                                <img src="https://i.pinimg.com/originals/85/85/3b/85853b549b1bea50d962c9ae869818f2.jpg" alt="propiedad" />
                                <h3>Datos de la propiedad {index + 1}</h3>
                                <h4 className='user'>Usuario: { item.user }</h4>
                                <div>
                                    <p><strong>Fecha:</strong> { item.date.toLocaleString() }</p>
                                    <p><strong>Tipo:</strong> { item.tipo }</p>
                                </div>
                                <div>
                                    <p><strong>Lugar:</strong> { item.lugar }</p>
                                    <p><strong>Habitaciones:</strong> { item.habs }</p>
                                    <p><strong>Metros cuadrados:</strong> { item.m2 }</p>
                                </div>
                                <p><strong>Total: $</strong> { item.total }</p>
                            </li>
                        )}
                    </ul>
                    <button className='deleteList' onClick={handleDeleteList}>Eliminar listado</button>
                </main>
            </>
        )
    }
    
}

export default History
