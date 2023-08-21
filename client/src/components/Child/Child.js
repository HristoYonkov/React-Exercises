import React, { useEffect } from 'react'

function Child({ returnComment }) {
    useEffect(() => {
        console.log('Function was Invoked!');
    }, [returnComment])

    return <p>{returnComment(' - Guest')}</p>
}

export default Child