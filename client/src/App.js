import React, { useState, lazy, Suspense } from "react";
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
        <Route
          path="/"
          element={
            <Suspense fallback={"loading"}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/pokemon/:pokemon"
          element={
            <Suspense fallback={"loading"}>
              <Pokemon />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={"loading"}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
