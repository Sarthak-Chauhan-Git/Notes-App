import Todo from "./Todo";
import { useState, useEffect } from "react";
import AddNote from "./AddNote";

function Sidebar() {
  const todos = [
    { time: "12:00 AM", note: "I am Sarthak" },
    { time: "1:10 PM", note: "I am Good" },
    { time: "4:50 PM", note: "I am Lucky" },
  ];

  let [addnotebtn, setaddnotebtn] = useState(false);
  function handleaddnotebtn(e) {
    setaddnotebtn((prev) => !prev);
  }

  return (
    <div id="sidebar">
      <h1>Store memories for life</h1>
      <hr />

      <button id="addnotebtn" onClick={handleaddnotebtn}>
        {addnotebtn ? "Cancel" : "New Note"}
      </button>
      <AddNote isOpen={addnotebtn} onSave={handleaddnotebtn}></AddNote>

      <div className="todo">
        <h3>Today's Schedule</h3>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.time}></Todo>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
