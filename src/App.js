import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarList from "./pages/carList.js";
import NewCar from "./pages/newCar.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CarList />} />
        <Route exact path="/newCar" element={<NewCar />} />
      </Routes>
    </Router>
  );
}

export default App;
