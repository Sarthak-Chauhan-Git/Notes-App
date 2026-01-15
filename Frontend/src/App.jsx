import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import LoginPage from "./components/LoginPage";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/app" element={<Home />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
