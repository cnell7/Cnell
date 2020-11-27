import './App.css';
import Home from './Pages/Home.js'
import Project from './Pages/Project.js'
import Contact from './Pages/Contact.js'
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
        <section id='cnellSection' class='hero is-fullheight'>
          <div class="hero-head">
            <nav id='cnellNavbar' class='navbar is-transparent is-black'>
              <div class='navbar-brand'>
                <div class='navbar-item'>
                  <img src='./Images/N.png'></img>
                </div>
              </div>
              <div class='navbar-menu'>
                <div class='navbar-start'>
                  <a class='navbar-item'>
                    <Link to='/'><strong class='PINK'>Home</strong></Link>
                  </a>
                  <a class='navbar-item'>
                    <Link to='/project'><strong class='PINK'>Projects</strong></Link>
                  </a>
                </div>
                <div class='navbar-end'>
                  <div class='navbar-item has-dropdown is-hoverable'>
                    <a class='navbar-link is-arrowless'>
                      <strong class='PINK'>Follow</strong>
                    </a>
                    <div class='navbar-dropdown is-boxed'>
                      <a class='navbar-item' href='https://github.com/cnell7' target='_blank'>
                        <img src='./Images/GitHub-Mark.png'></img>
                      </a>
                      <a class='navbar-item' href='https://www.linkedin.com/in/christiannell/' target='_blank'>
                        <img src='./Images/linked.png'></img>
                      </a>
                      <hr class="navbar-divider"></hr>
                      <a class='navbar-item'>
                        <Link to='/connect'><p class='content PINK'>Contact</p></Link>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div class='hero-body'>
            <Switch>
              <Route path='/project'>
                <Project />
              </Route>
              <Route path='/connect'>
                <Contact />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </section>
      </Router>);
  }
}
