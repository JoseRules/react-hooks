import { useEffect, useRef, useState } from "react";

function UseRefHook(){

  const [name, setName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  })

  return(
    <>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <div>I've rendered {renderCount.current} times</div>
    </>
  );
}

export default UseRefHook;