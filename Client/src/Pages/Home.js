import React from 'react';
import '../App.css';
import history from '../history.js'

export default class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class='container'>
                <div class='hero is-fullheight'>
                    <div class='hero-body'>
                        <div class='container'>
                            <h1 class='title PINK SHADOW'>Christian Nell</h1>
                            <h2 class='subtitle'><p id='devSubtitle' class='SHADOW'>Developer</p> <p id='devSubtitle' class='ml-2 SHADOW'>Engineer</p></h2>
                        </div>  
                    </div>
                </div>
                <div class='container'>
                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-danger">
                            <div class="content">
                                <p class="title">Scripting</p>
                                <p class="subtitle">Python - BASH</p>
                                <div class="content">
                                </div>
                            </div>
                            </article>
                        </div>
                        <div class="tile is-vertical is-8">
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-danger">
                                    <p class="title">Web Development</p>
                                    <p class="subtitle">React, ES6, MVC, Socket.io, Express, ect.</p>
                                    <div class="content">
                                    </div>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-danger">
                                    <p class="title">Software Development</p>
                                    <p class="subtitle">Java, C, Assembly (MIPS), OOP, Data Structures, Algorithms</p>
                                    <div class="content">
                                    </div>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-danger">
                                    <p class="title">Design</p>
                                    <p class="subtitle">Adobe Illustrator</p>
                                    <div class="content">
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}