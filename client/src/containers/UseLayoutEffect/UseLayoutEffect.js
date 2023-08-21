import React, {useLayoutEffect, useEffect, useRef} from 'react'
// useLayoutEffect hook is triggering before useEffect hook!

const UseLayoutEffect = () => {
    const inputRef = useRef(null);
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
        inputRef.current.value = 'useLayoutEffect'
    }, []);
    
    useEffect(() => {
        inputRef.current.value = 'useEffect'
    }, []);

  return (
      <>
      <h1>UseLayoutEffect</h1>
      <input type="text" value='initialValue' ref={inputRef} />
    </>
  )
}

export default UseLayoutEffect