import Home from './Pages/Home.js'
import React from 'react';
import {
  Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
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
        <nav class='navbar is-black'>
          <div class='navbar-brand'>
            <h1 class='navbar-item title is-3 has-text-white'>
              <strong>Cnell</strong>
            </h1>
          </div>
          <div class='navbar-menu'>
            <div class='navbar-start'>
              <a class='navbar-item'>
                <Link to='/home'><strong>Home</strong></Link>
              </a>
              <div class='navbar-item has-dropdown is-hoverable'>
                <a class='navbar-link'>
                  Follow
                </a>
                <div class='navbar-dropdown'>
                  <a class='navbar-item' href='https://github.com/cnell7' target="_blank">
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
      </div>

      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>);
  }
}
