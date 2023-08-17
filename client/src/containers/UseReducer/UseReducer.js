import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + 1 }
      break;
    case 'decrement':
      return { ...state, value: state.value - 1 }
      break;
    case 'ifEven':
      if (state.value % 2 === 0) {
        return { ...state, showText: true }
      } else {
        return { ...state, showText: false }
      }
      break;
    default:
      return state;
      break;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0, showText: true });

  return (
    <>
      <h1>UseReducer</h1>
      <h2>{state.value}</h2>

      <button onClick={() => {
        dispatch({ type: 'increment' });
        dispatch({ type: 'ifEven' });
      }}
      >
        Increment
      </button >
      
      <button onClick={() => {
        dispatch({ type: 'decrement' });
        dispatch({ type: 'ifEven' });
      }}
      >
        Decrement
      </button>

      {state.showText && <p>This number is even</p>}
    </>
  )
}

export default UseReducer