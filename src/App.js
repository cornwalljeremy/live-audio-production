import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
// import Background from "./components/background";

function App() {
  return (
    <Router>
      <SideBar />
      <NavBar />
    </Router>
  );
}

export default App;
