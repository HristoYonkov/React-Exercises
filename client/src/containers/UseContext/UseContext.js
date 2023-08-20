import React, { createContext, useState } from 'react'
import Login from '../../components/Login/Login'
import User from '../../components/User/User'

export const useCTXContext = createContext(null);

const UseContext = () => {
    const [username, setUsername] = useState('');

    return (
        <useCTXContext.Provider value={{ username, setUsername }}>
            <h1>UseContext</h1>
            <Login /> <User />
        </useCTXContext.Provider>
    )
}

export default UseContext