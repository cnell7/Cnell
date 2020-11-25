import '../App.css';
import React from "react";
import history from '../history.js';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="hero is-light is-link is-fullheight-with-navbar">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            Christian Nell
                        </h1>
                    </div>
                </div>
            </div>);
    }
}