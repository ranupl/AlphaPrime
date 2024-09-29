import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from "./components/home"; 
import { Navbar } from './components/navbar';
import { LoginModal } from './components/login'; 
import { SignupModal } from './components/signUp'; 

function App() {
  const [token, setToken] = useState(null); 

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken); 
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          {!token ? (
            <Route
              path="*"
              element={
                <div className="flex justify-center items-center h-screen">
                  <p className="text-lg font-semibold">
                    Please login to access this content.
                  </p>
                </div>
              }
            />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginModal />} />
              <Route path="/signup" element={<SignupModal />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


