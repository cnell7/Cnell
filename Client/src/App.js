import './App.css';
import Home from './Pages/Home.js'
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
            </div>

          </div>

        </nav>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>);
  }
}
