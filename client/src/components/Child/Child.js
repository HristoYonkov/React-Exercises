import React, { useEffect } from 'react'

function Child({ returnComment }) {
    useEffect(() => {
        console.log('Function was Invoked!');
    }, [returnComment])

    return <h4>{returnComment(' - Guest')}</h4>
}

export default Child