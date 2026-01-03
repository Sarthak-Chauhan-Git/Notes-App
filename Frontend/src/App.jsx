import "./App.css";
import Navbar from "./components/Navbar";
import Notepad from "./components/Notepad";
import Sidebar from "./components/Sidebar";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div id="app-structure">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <div id="notepad">
          <Notepad></Notepad>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
