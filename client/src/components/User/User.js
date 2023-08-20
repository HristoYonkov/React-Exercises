import React, { useContext } from 'react'
import { useCTXContext } from '../../containers/UseContext/UseContext'

const User = () => {
    const { username } = useContext(useCTXContext);

    return (
        <div>
            <h1>User: {username}</h1 >
        </div >
    )
}

export default User