import React, { useRef } from 'react'
// Access dom element when we need.

const UseRef = () => {
    const inputRef = useRef(null);
    const titleRef = useRef(null);

    const buttonClick = () => {
        // inputRef.current.focus();
        console.log(titleRef.current);
        titleRef.current.textContent = inputRef.current.value;
        inputRef.current.value = '';
    }
    return (
        <>
            <h1 ref={titleRef}>UseRef</h1>
            <input type="text" placeholder='text..' ref={inputRef} />
            <button onClick={buttonClick}>Change Title</button>
        </>
    )
}

export default UseRef;