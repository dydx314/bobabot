import React, { Component } from 'react';
import Main from './main.js';
import history from '../history.js'
class StateContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage:"home",
        };
    }

    selectPage=(p)=>{
        let path = '/'+p;
        history.push(path);
        // console.log("I am here at the selectPage");
        this.setState({
            currentPage: p,
        });
    }
    
    render() {
        // console.log("app: currentPage = "+this.state.currentPage);
        return (
            <div >
                <Main currentPage={this.state.currentPage}/>
            </div>
        );
    }

}

export default StateContainer;
