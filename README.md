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

## `useEffect`

useEffect is a hook that lets you synchronize a component with an external system.

### Parameters

- setup: The function with your effect's logic. Your setup function may also optionally return a cleanup function. When your component is added to the DOM, React will run your setup function. After every rerender with changed dependencies, React will first run the cleanup function(if you provided it) with the old values, and then run your setup function with the new values. After your component is removed from the DOM, React will run your cleanup function. 
- optional dependencies: The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using Object.is comparison. If you omit this argument, your Effect will re-run after every re-render of the component.
• If you specify the dependencies, your Effect runs after the initial render and after re-renders with changed dependencies.
• If your dependency array is empty, it will only run after the initial render.
• If you pass no dependency array at all, your Effect runs after every single render (and re-render) of your component.

### Caveats 

- useEffect is a Hook, so you can only call it at the top level of your component or your own Hooks. You can't call it inside loops or conditions. If you need that, extract a new component and move the state into it.
- If you're not trying to synchronize with some external system, you probably don't need an Effect.
- When Strict Mode is on, React will run one extra development-only setup+cleanup cycle before the first real setup. This is a stress-test that ensures that your cleanup logic "mirrors" your setup logic and that it stops or undoes whatever the setup is doing. If this causes a problem, implement the cleanup function.
- If some of your dependencies are objects of functions defined inside the component, there is a risk that they will cause the Effect to re-run more often than needed. To fix this, remove unnecessary object and function dependencies. You can also extract state updates and non-reactive logic outside of your Effect.
- If your Effect wasn't caused by an interaction (like a click), React will generally let the browser paint the updated screen first before running your Effect. If your Effect is doing something visual (for example, positioning a tooltip), and the delay is noticeable (for example, it flickers), replace useEffect with useLayoutEffect.
- If your Effect is caused by an interaction (liek a click), React may run your Effect before the browser paints the updated screen. This ensures that the result of the Effect can be observed by the event system. Usually, this works as expected. However, if you must defer the work until after paint, such as an alert(), you can use setTimeout.
- Even if your Effect was caused by an interaction (like a click), React may allow the browser to repaint the screen before processing the state updates inside your Effect. Usually, this works as expected. However, if you must block the browser from repainting the screen, you need to replace useEffect with useLayoutEffect.
- Effects only run on the client. They don't run during server rendering.

Find more information [here.](https://react.dev/reference/react/useEffect)
