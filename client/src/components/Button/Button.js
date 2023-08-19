import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef(({}, ref) => {
    const [toggle, setToggle] = useState(false);
    
    useImperativeHandle(ref, () => ({
        // Alter way for setting the toggle state in the child component,
        // instead of setting it in the parent state!
        alterToggle() {
            setToggle(!toggle);
        }
    }));

    return (
        <>
            <button
                // onClick={() => {
                //     setToggle(!toggle);
                // }}
            >
                Button From Child
            </button>
            {toggle && <span>Toggle</span>}
        </>
    );
});

export default Button