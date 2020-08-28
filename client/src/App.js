import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Index from "./components/Index/Index";
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Wrapper from './components/Wrapper/index';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="mt-1">
      <Router>
        <div>
          <Navbar />
          <Wrapper className="mt-4">
            <Route exact path="/" component={Index} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
          </Wrapper>
          <Footer />
        </div>
      </Router>

    </div>
  );
}

export default App;

