import React from 'react'

const Login = ({ setUsername }) => {
    return (
        <input 
            onChange={(e) => {
                setUsername(e.target.value);
            }}
        />
    )
}

export default Login