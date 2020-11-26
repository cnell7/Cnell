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
                <h1 class='title'>Christian Nell</h1>
                <h2 class='subtitle'><p id='devSubtitle'>Developer</p> <p id='devSubtitle' class='ml-2'>Engineer</p></h2>
                <div class="tile is-ancestor">
                    <div class="tile">
                        
                    </div>
                    <div class="tile">
                    </div>
                </div>
            </div>);
    }
}