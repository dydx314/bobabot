import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from '../history.js';
import Confirm from './confirm.js';

class GreetingOld extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        };

    }

    render() {
        const user = this.state.user;
        const greetingPanel = (<div> WELCOME BACK {user.name} </div>);
        const historicalOrder = (<div> historical order </div>); // pull data from api
        user.order = "some order";
        return (
          <div>
            {greetingPanel}
            {historicalOrder}
            <div>also this is our menu</div>
            <button onClick={this.props.onButtonPressed}>
                confirm
                </button>
          </div>
        );
      }
}

export default GreetingOld;
