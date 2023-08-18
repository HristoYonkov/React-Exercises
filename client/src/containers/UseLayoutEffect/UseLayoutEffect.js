import React, {useLayoutEffect, useEffect, useRef} from 'react'

const UseLayoutEffect = () => {
    const inputRef = useRef(null);
    // useLayoutEffect hook is triggering before useEffect hook!
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