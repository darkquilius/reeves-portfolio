import React from "react";
import Header from "./Components/Header";
import Info from "./Components/Info/Info";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./tailwind.css"

function App() {
  return (        
  <Router  >
    <Header/>
    <Switch >
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="*" component={Info} />
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;
