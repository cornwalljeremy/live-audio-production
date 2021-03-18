import React from 'react';
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from 'react-router-dom';
import Background from './components/background';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Background />
      <Footer />
    </Router>
  );
}

export default App;
