import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Notepad from "./components/Notepad";

function Home() {
  return (
    <div id="app-structure">
      <Navbar />
      <Sidebar />
      <div id="notepad">
        <Notepad />
      </div>
    </div>
  );
}

export default Home;
