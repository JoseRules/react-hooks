import { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toogle_todo',
  DELETE_TODO: 'delete_todo'
}

function reducer(todos, action){
  console.log("got to reducer")
  console.log(action)
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, createTodo(action.payload.text)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(item =>{
        if(item.id === action.payload.id){
          console.log({...item, completed: !item.completed})
          return {...item, completed: !item.completed};
        }else{
          return item;
        }
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(item => item.id !== action.payload.id);
  
  }
}

function createTodo(description){
  return {
    id: Date.now()+10,
    description,
    completed: false
  }
}

function UseReducerHook2(){
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  function handleSubmit(e){
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload: {text}});
  }

  function toogleTodo(id){
    dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id}});
  }

  function deleteTodo(id){
    dispatch({type: ACTIONS.DELETE_TODO, payload: {id}});
  }

  return(
    <>
      <h2>To Do's</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button type="submit">Add Todo</button>
      </form>
      {state.map(item => {
        return(
          <div key={item.id} style={{backgroundColor: item.completed ? 'lightgreen' : 'red'}}>
            <p>{item.description}</p>
            <button onClick={() => toogleTodo(item.id)}>Complete</button>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </div>)
      })}
    </>
  );
}

export default UseReducerHook2;