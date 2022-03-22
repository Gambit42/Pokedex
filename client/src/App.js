import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonName" element={<Pokemon />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
