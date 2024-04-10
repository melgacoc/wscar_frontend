import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarList from "./pages/carList.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CarList />} />
      </Routes>
    </Router>
  );
}

export default App;
