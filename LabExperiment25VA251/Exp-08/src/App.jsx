import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Counter App</h1>
        <p className="subtitle">State Management using useState Hook</p>

        <div className={`counter-display ${count > 0 ? "positive" : count < 0 ? "negative" : ""}`}>
          {count}
        </div>

        <div className="buttons">
          <button className="btn btn-increment" onClick={increment}>
            + Increment
          </button>
          <button className="btn btn-decrement" onClick={decrement}>
            − Decrement
          </button>
          <button className="btn btn-reset" onClick={reset}>
            ↺ Reset
          </button>
        </div>

        <p className="status">
          {count === 0 && "Counter is at zero"}
          {count > 0 && `Count is positive (${count})`}
          {count < 0 && `Count is negative (${count})`}
        </p>
      </div>
    </div>
  );
}

export default App;
