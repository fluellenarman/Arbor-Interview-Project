import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/Signup';
import HomePage from './pages/homepage';
import Map from './pages/Map';
import History from './pages/History';
import Auth0Login from './pages/Auth0Login';
import Auth0LoginHelper from './pages/Auth0LoginHelper';
import { Auth0Provider } from '@auth0/auth0-react';

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