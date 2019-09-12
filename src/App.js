import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Upload from './components/Upload';
import View from './components/View';
import ViewbyId from './components/ViewbyId';
// import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/upload'} className="nav-link">Upload</Link></li>
            <li><Link to={'/view'} className="nav-link">View</Link></li>
            {/* <li><Link to={'/contact'} className="nav-link">Contact</Link></li> */}
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/upload' component={Upload} />
              <Route path='/view/:id' component={ViewbyId} />
              <Route path='/view' component={View} />
              {/* <Route path='/contact' component={Contact} /> */}
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;