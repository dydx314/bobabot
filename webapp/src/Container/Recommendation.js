import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from '../history.js';
import GreetingOld from '../Components/GreetingOld.js';
import GreetingNew from '../Components/GreetingNew.js';
import Confirm from '../Components/confirm';


class Recommendation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // user: props.user,
            renderConfirm:false,
            user: null
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
        if (this.state.renderConfirm) {
            panel =  <Confirm user={user} />;
           
        } else if (user) {
            panel = <GreetingOld user={user} onButtonPressed = {this.handleButtonPress} />;
        } else {
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
