import { useState } from "react";
import "./coustom.css";

function App() {
  const [count, setCount] = useState(4);

  function addnum() {
    if (count < 12) {
      setCount(count + 1);
    }
  }

  const removenum = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div>
        <h1>Counter With React</h1>
        <br />
        <div className="counter">
          <button onClick={addnum}>+</button>
          <h2>Counter :- {count}</h2>
          <button onClick={removenum}>-</button>
        </div>
      </div>
    </>
  );
}

export default App;
