function Todo({ todo }) {
  return (
    <div className="todo-data">
      <div className="todo-schedule">
        <span>{todo.time}</span>
      </div>
      <h4>{todo.note}</h4>
    </div>
  );
}

export default Todo;
