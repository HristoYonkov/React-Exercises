import React, { useContext } from 'react'
import { useCTXContext } from '../../containers/UseContext/UseContext';

const Login = () => {
    const { setUsername } = useContext(useCTXContext);

    return (
        <input
            onChange={(e) => {
                setUsername(e.target.value);
            }}
        />
    )
}

export default Login