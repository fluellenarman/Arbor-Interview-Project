import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/Signup';
import HomePage from './pages/homepage';
import Map from './pages/Map';
import History from './pages/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/homePage" element={<HomePage/>}/>
        <Route path="/Map" element={<Map/>}/>
        <Route path="/History" element={<History/>}/>
      </Routes>
    </Router>
    
  )
}

export default App