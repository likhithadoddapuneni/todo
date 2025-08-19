import { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./components/todoform";
import TodoList from "./components/todolist";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch all todos
  useEffect(() => {
    axios.get("http://localhost:5000/api/todos")
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add todo
  const addTodo = (title) => {
    axios.post("http://localhost:5000/api/todos", { title })
      .then(res => setTodos([...todos, res.data]))
      .catch(err => console.error(err));
  };

  // Update todo
  const updateTodo = (id, updatedTodo) => {
    axios.put(`http://localhost:5000/api/todos/${id}`, updatedTodo)
      .then(res => {
        setTodos(todos.map(todo => todo._id === id ? res.data : todo));
      })
      .catch(err => console.error(err));
  };

  // Delete todo
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo._id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1>📋 My Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
