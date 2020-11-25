import Home from './Pages/Home.js'
import React from "react";
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './history.js';


export default class App extends React.Component  {
  constructor(props){
    super(props);
  }
  handleCLick(){

  }
  render(){
    return(
    <Router history={history}>
      <div id='test'>
        <nav class='navbar is-transparent is-black'>
          <div class='navbar-brand'>
            <h1 class='title is-3 has-text-white'>
              <strong>Cnell</strong>
            </h1>
          </div>
          <div class="navbar-menu">
            <div class="navbar-start">
              <a class="button is-danger is-inverted">
                <Link to="/home"><strong class="has-text-danger">Home</strong></Link>
              </a>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                  <a class="navbar-item">
                    Report an issue
                  </a>
                </hr>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>);
  }
}
