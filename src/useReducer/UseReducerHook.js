import { useReducer, useState } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action){
  switch(action.type){
    case ACTIONS.INCREMENT: 
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default: 
      return state;
  }
}

function UseReducerHook(){
  const [state, dispatch] = useReducer(reducer, {count: 0});

  const decrement = () => dispatch({type: ACTIONS.DECREMENT});
  const increment = () => dispatch({type: ACTIONS.INCREMENT});

  return(
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
} 

export default UseReducerHook;