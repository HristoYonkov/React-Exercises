import React, { createContext, useState } from 'react'
import Login from '../../components/Login/Login'
import User from '../../components/User/User'

// useContext Helps Us Avoid Prop Drilling
// In React, we want to avoid the following problem of creating multiple props
// to pass data down two or more levels from a parent component.
export const useCTXContext = createContext(null);

const UseContext = () => {
    const [username, setUsername] = useState('');

    return (
        <useCTXContext.Provider value={{ username, setUsername }}>
            <h1>UseContext</h1>
            <Login />
            <User />
        </useCTXContext.Provider>
    )
}

export default UseContext