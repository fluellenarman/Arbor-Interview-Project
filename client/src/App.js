import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/Signup';
import HomePage from './pages/homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/homePage" element={<HomePage/>}/>
      </Routes>
    </Router>
    
  )
}

export default App