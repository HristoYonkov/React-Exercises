import React, { useRef } from 'react'
import Button from '../../components/Button/Button';
// Alter way for setting the toggle state in the child component,
// instead of setting it in the parent state!
// In other words, you can change the state in child component, from parent one!

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