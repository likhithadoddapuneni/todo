function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id} style={{ margin: "10px 0" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => updateTodo(todo._id, { completed: !todo.completed })}
          />
          <span style={{ marginLeft: "10px" }}>
            {todo.title}
          </span>
          <button 
            onClick={() => deleteTodo(todo._id)} 
            style={{ marginLeft: "10px" }}
          >
            ❌ Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
