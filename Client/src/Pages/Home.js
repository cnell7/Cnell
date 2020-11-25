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
                <h2 class='subtitle'><p id='devSubtitle'>Developer</p></h2>
            </div>);
    }
}