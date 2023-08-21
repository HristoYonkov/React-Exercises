import React, { useCallback, useState } from 'react'
import Child from '../../components/Child/Child';
// Simmilar as 'useMemo' hook but instead of returning value,
// it returns and 'memorize' entire function!

const UseCallback = () => {
  const [data, setData] = useState('Data from the Parent!');
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback((name) => {
    return data + name;
  }, [data]);


  return (
    <>
      <h1>UseCallback</h1>
      <Child returnComment={returnComment} />

      <button
        onClick={() => { setToggle(!toggle) }}
      >
        Toggle
      </button>
      {toggle && <h1>Toggle!</h1>}
    </>
  )
}

export default UseCallback