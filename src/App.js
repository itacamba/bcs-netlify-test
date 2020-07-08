import React from 'react';
import './App.css';
import Nav from './navbar/Nav'
import Footer from './Footer'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ContactUs from './ContactUs';


function App() {
  return (
    <Router className="App">
      <Nav/>
      <Switch>
            <Route exact path="/" component={Home} />
      </Switch>
      <Footer/>
      <ContactUs/>
    </Router>
  );
}

export default App;


