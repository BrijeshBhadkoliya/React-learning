import { useState } from 'react'


function App() {

  const [count, setCount] = useState(4)

   function addnum(){
    setCount(count+1)
   }

   const removenum = () => {
    setCount(count-1)
   }
  return (
    <>
      <h1>Counter With React</h1>  
      <br/>
      <button onClick={addnum()}>+</button>&nbsp;&nbsp;
      <h2>Counter :- {count}</h2>
      &nbsp;&nbsp; <button onClick={removenum()}>-</button>

    </>
  )
}

export default App
