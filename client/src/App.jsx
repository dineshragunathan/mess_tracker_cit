import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login.jsx";
import Menu from "./components/Menu.jsx";
import Navbar from "./components/MessNavbarDinesh.jsx";
import Vote from "./components/Vote.jsx"
import Result from "./components/Result.jsx"
import './components/App.css';
import About from "./components/About.jsx";



function App() {
  return (

    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/about" element={<About />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
