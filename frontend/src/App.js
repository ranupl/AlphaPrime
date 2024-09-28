import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import logo from './logo.svg';
import './App.css';
import { CardManager } from "./components/cardManager"; // Correct import case
import { Navbar } from './components/Navbar';
import { LoginModal } from './components/login'; // Import Login component if necessary
import { SignupModal } from './components/signUp'; // Import Signup component if necessary

function App() {
  return (
    <Router> {/* Wrap with BrowserRouter */}
      <div className="App">
        <Navbar />
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<CardManager />} /> {/* Home route */}
          <Route path="/login" element={<LoginModal />} /> {/* Login route */}
          <Route path="/signup" element={<SignupModal />} /> {/* Signup route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

