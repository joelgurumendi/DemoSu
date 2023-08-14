import { Routes, Route } from "react-router-dom";
import { Home, Inicio } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
