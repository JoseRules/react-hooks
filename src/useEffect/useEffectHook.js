import { useEffect, useState } from "react";

function UseEffectHook(){
  const [resource, setResource] = useState('posts');
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => response.json())
      .then((json) => setResources(json));
  }, [resource]);

  return(
    <>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("users")}>Users</button>
        <button onClick={() => setResource("comments")}>Comments</button>
      </div>
      <h2>{resource}</h2>
      {
        resources.map(item => {
          return(<p>{JSON.stringify(item)}</p>)
        })
      }
    </>
  );
}

export default UseEffectHook;