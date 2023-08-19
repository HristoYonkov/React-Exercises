import React, { useRef } from 'react'
import Button from '../../components/Button/Button';

const UseImperativeHandle = () => {
    const buttonRef = useRef(null);

    return (
        <div className='main'>
            <h1>UseImperativeHandle</h1>
            <button
                onClick={() => {
                    buttonRef.current.alterToggle();
                }}
            >
                Button From Parent
            </button>
            <Button ref={buttonRef} />
        </div>
    )
}

export default UseImperativeHandle