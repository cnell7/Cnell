import './App.css';
import Home from './Pages/Home.js'
import Project from './Pages/Project.js'
import Connect from './Pages/Connect.js'
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
        <nav class='navbar is-transparent is-dark'>
          <div class='navbar-brand'>
            <h1 class='navbar-item title is-5'>
              <strong>Cnell</strong>
            </h1>
          </div>
          <div class='navbar-menu'>
            <div class='navbar-start'>
              <a class='navbar-item'>
                <Link to='/'><strong class='has-text-white'>Home</strong></Link>
              </a>
              <a class='navbar-item'>
                <Link to='/project'><strong class='has-text-white'>Projects</strong></Link>
              </a>
            </div>
            <div class='navbar-end'>
              <div class='navbar-item has-dropdown is-hoverable'>
                <a class='navbar-link'>
                  Follow
                </a>
                <div class='navbar-dropdown is-boxed'>
                  <a class='navbar-item' href='https://github.com/cnell7' target='_blank'>
                    <p class='content has-text-black'>GitHub</p>
                  </a>
                  <a class='navbar-item' href='https://www.linkedin.com/in/christiannell/' target='_blank'>
                    <p class='content has-text-black'>LinkedIn</p>
                  </a>
                  <hr class="navbar-divider"></hr>
                  <a class='navbar-item'>
                    <Link to='/connect'><p class='content has-text-black'>Connect</p></Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path='/project'>
            <Project />
          </Route>
          <Route path='/connect'>
            <Connect />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>);
  }
}
