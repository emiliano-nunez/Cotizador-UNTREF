import React, { createContext, useEffect, useState } from 'react'

export const userContext = createContext()

function UserContext({ children }) {

    const [userHistory, setUserHistory] = useState([])
    const [logged, setLogged] = useState(false)

    const addItem = (item) => {
        const updatedList = [...userHistory, item]
        localStorage.setItem('userHistory', JSON.stringify(updatedList))

        setUserHistory(updatedList)
    }

    useEffect(() => {
        const userHistory = JSON.parse(localStorage.getItem('userHistory'))
        setUserHistory(userHistory || [])
    },[])

    return (
        <userContext.Provider value={{ userHistory, addItem, logged, setLogged, setUserHistory }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContext
