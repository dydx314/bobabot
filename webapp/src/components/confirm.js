import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from '../history.js';
class Confirm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            display: "none"
        };

    }

    render() {
        const user = this.state.user;
        const order = (<div> You have ordered the following items {user.order} </div>);
        return (
          <div>
            {order}
            <button onClick={this.props.function}>confirm</button>
          </div>
        );
      }
}

export default Confirm;
