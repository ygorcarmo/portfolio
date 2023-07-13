import { Routes, Route } from "react-router-dom";
import { Home, Projects } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
