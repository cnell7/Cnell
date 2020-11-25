import './App.css';
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Project from './Pages/Project.js'
import React from "react";
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './history.js';

export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Router history={history}>
        <nav class='navbar is-transparent'>
          <div class='navbar-brand'>
            <h1 class='navbar-item title is-5'>
              <strong>Cnell</strong>
            </h1>
          </div>
          <div class='navbar-menu'>
            <div class='navbar-start'>
              <a class='navbar-item has-text-black'>
                <Link to='/'><strong>Home</strong></Link>
              </a>
              <a class='navbar-item has-text-black'>
                <Link to='/about'><strong>About</strong></Link>
              </a>
              <a class='navbar-item has-text-black'>
                <Link to='/projects'><strong>Projects</strong></Link>
              </a>
            </div>
            <div class='navbar-end'>
              <div class='navbar-item has-dropdown is-hoverable'>
                <a class='navbar-link'>
                  Follow
                </a>
                <div class='navbar-dropdown'>
                  <a class='navbar-item' href='https://github.com/cnell7' target='_blank'>
                    Github
                  </a>
                  <a class='navbar-item' href='https://www.linkedin.com/in/christiannell/' target='_blank'>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route>
            <Project />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>);
  }
}
