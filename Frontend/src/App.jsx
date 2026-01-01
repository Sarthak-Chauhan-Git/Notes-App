import "./App.css";
import Navbar from "./components/Navbar";
import Notepad from "./components/Notepad";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div id="app-structure">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div id="notepad">
        <Notepad></Notepad>
      </div>
    </div>
  );
}

export default App;
