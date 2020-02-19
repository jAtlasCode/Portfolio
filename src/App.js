import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar'
import About from './components/About/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router className='App'>
    
      <NavBar>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </NavBar>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" component={About}>
          
        </Route>
        <Route path="/projects">
          {/* <Users /> */}
        </Route>
      </Switch>
    
  </Router>
  </>
  );
}

export default App;
