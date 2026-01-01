import Todo from "./Todo";

function Sidebar() {
  const todos = [
    { time: "12:00 AM", note: "I am Sarthak" },
    { time: "1:10 PM", note: "I am Good" },
    { time: "4:50 PM", note: "I am Lucky" },
  ];
  return (
    <div id="sidebar">
      <h1>Store memories for life</h1>
      <hr />
      <button>New Note</button>
      <div className="todo">
        <h3>Today's Schedule</h3>
        {todos.map((todo) => (
          <Todo todo={todo}></Todo>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
