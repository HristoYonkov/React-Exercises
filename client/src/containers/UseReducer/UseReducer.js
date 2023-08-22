import React, { useReducer } from 'react'
// useReducer is (Another) Powerful State Management Tool
// useReducer is a hook for state management, much like useState,
// and relies upon a kind of function called a reducer.

// Reducers are simple, predictable (pure) functions that take a previous state object
// and an action object and return a new state object.

// useReducer can be used in many of the same ways that useState can,
// but is more helpful for managing state across multiple components
// that may involve different operations or "actions".

// You will need to reach for useReducer less than useState around your app.
// But it is very helpful as a powerful means of managing state in smaller applications,
// rather than having to reach for a third-party state management library like Redux.


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