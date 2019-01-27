import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from '../history.js';
import Confirm from './confirm.js';
class GreetingNew extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {onButtonPressed: props.onButtonPressed};
       

    }

   

    render() {
        const greetingPanel = (<div> HELLO! </div>);
        const userName = "gen";
        const nameInput = (<label>
            Your Name:
            <input type="text" name="name" />
          </label>);
        const user = {name: userName, order: "some order"}; //still need to add order
        const popularOptions = (<div> popularOptions </div>); // pull data from api
        return (
          <div>
            {greetingPanel}
            {popularOptions}
            <div>also this is our menu</div>

            <button onClick={this.props.onButtonPressed} onClick={this.props.generateNewUser(user)}>
                confirm
                </button>
          </div>
        );
      }
}

export default GreetingNew;
