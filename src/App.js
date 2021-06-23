import React from "react";
import './App.css';
import NavMenu from './Components/NavMenu';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
export default function App() {
  return (
    <>
      <Router>
         <NavMenu></NavMenu>
         <Switch>
           <Route path="/about"> <About/></Route>
           <Route path="/projects"> <Projects/></Route>
           <Route path="/contact"> <Contact/></Route>
           <Route path="/"> <Home/></Route>

         </Switch>
      </Router>  
    </>
  );
}


