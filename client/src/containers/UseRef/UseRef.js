import React, { useRef } from 'react'
// Access React-Dom element when we need.
// useRef to Reference React Elements..
// Refs are a special attribute that are available on all React components.
// They allow us to create a reference to a given element / component-
// when the component mounts.

const UseRef = () => {
    const inputRef = useRef(null);
    const titleRef = useRef(null);

    const buttonClick = () => {
        // using focus(), you can directly type in the field
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