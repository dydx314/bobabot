import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from '../history.js';
import GreetingOld from '../Components/GreetingOld.js';
import GreetingNew from '../Components/GreetingNew.js';
import Confirm from '../Components/confirm';


class Recommendation extends React.Component {

    constructor(props) {
        super(props);
        console.log("user", this.props.user);
        this.state = {
            // user: props.user,
            renderConfirm:false,
            user: this.props.user
        };

    }

    handleButtonPress = () => {
        this.setState({
            renderConfirm: true,
        });
    }

    createNewUser = (user) => {
        this.setState({
            user: user,
        });
    }

    render() {
        const user = this.state.user;
        //const user = null;
        let panel;
        console.log("recommendation line 37");
        if (this.state.renderConfirm) {
            panel =  <Confirm user={user} />;
           
        } else if (user) {
            panel = <GreetingOld user={user} onButtonPressed = {this.handleButtonPress} />;
        } else {
            console.log("im at the registration page");
            panel = <GreetingNew onButtonPressed = {this.handleButtonPress} generateNewUser = {this.createNewUser}/>;
        }
    
        return (
          <div>
            {panel} 

          </div>
        );
      }
}

export default Recommendation;
