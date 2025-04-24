# React Hooks

Primary React Hooks

## `useState`

Call useState at the top level of your component to declare a state variable.

### Parameters

- initialState: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.
- if you pass a function as initialState, it will be treated as an initializer function. It should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state.

### Returns 
useState returns an array with exactly two values:

1. The current state. During the first render, it will match the initialState you have passed.
2. The set function that lets you update the state to a different value and trigger a re-render.

### Caveats 

- useState is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
- In Strict Mode, React will call your initializer function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your initializer function is pure (as it should be), this should not affect the behavior. The result from one of the calls will be ignored.

Find more information [here.](https://react.dev/reference/react/useState)
