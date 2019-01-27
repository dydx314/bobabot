import React from "react";
import { BrowserRouter as Router, Route,Redirect, Link } from "react-router-dom";
import CameraPage from '../Components/CameraPage.js';
import Home from '../Components/home.js';
import Recommendation from './Recommendation.js';
import MicrophonePage from '../Components/MicrophonePage.js';
// import Confirm from '../Components/confirm.js';
// 

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
  };

   
}
updateUser = (u) => {

  console.log("main line 22");

  this.setState({
      user: u,
  });

}


  render() {
    return(
      <main >
        <div >
          <Route exact path="/" render={ () => <Redirect to="/home" />} />
          <Route path="/home" render={ () => <Home/> } />
          <Route path="/camerapage" render={ () => <CameraPage getUser = {this.updateUser}/> } />
          <Route path="/recommendation" render={ () => <Recommendation user={this.state.user}/> } />
          {/* <Route path="/confirm" render={ () => <Confirm/> } /> */}
          <Route path="/microphonepage" render={ () => <MicrophonePage/> } />

        </div>
      </main>
    )
  }
}
export default Main;