import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React components", completed: true },
    { id: 2, text: "Understand JSX and props", completed: false },
    { id: 3, text: "Practice using useState hook", completed: false },
  ]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const pending = todos.filter((t) => !t.completed).length;
  const done = todos.filter((t) => t.completed).length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>My To-Do List</h1>
        <p className="subtitle">
          {pending} pending &nbsp;·&nbsp; {done} done
        </p>
      </header>

      <main className="app-main">
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        {todos.length === 0 && (
          <p className="empty-msg">No tasks yet. Add one above!</p>
        )}
      </main>
    </div>
  );
}

export default App;
