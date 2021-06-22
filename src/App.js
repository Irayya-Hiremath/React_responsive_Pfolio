import React from "react";
import './App.css';
import NavMenu from './Components/NavMenu';
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
         <NavMenu></NavMenu>
      </Router>  
    </>
  );
}


