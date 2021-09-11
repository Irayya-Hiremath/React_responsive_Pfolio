// import React from "react";
// import './App.css';
// import NavMenu from './Components/NavMenu';
// import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";


// export default function App() {
//   return (
//   <div>
//       <Router>
//          <NavMenu></NavMenu>
//          <Switch>
//            <Route path="/about"> <About/></Route>
//            <Route path="/projects"> <Projects/></Route>
//            <Route path="/contact"> <Contact/></Route>
//            <Route path="/"> <Home/></Route>

//          </Switch>
//       </Router>  
//     </div>
//   );
// }


import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";

 
function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/" exact ><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/projects"><Projects /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
        
      </Router>
        
    </div>
  );
}

export default App;