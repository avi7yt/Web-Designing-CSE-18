import { useState } from "react";

function TodoForm({ onAdd }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === "") return;
    onAdd(input.trim());
    setInput("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
