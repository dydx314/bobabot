import React from "react";
import { BrowserRouter as Router, Route,Redirect, Link } from "react-router-dom";
import CameraPage from '../Components/CameraPage';
import MicrophonePage from '../Components/MicrophonePage';
import Home from '../Components/home.js'

// 

class Main extends React.Component {
  constructor(props) {
    super(props);

   
}

  render() {
    return(
      <main >
        <div >
          <Route exact path="/" render={ () => <Redirect to="/home" />} />
          <Route path="/home" render={ () => <Home/> } />
          <Route path="/camerapage" render={ () => <CameraPage/> } />
          <Route path="/microphonepage" render={ () => <MicrophonePage/> } />

        </div>
      </main>
    )
  }
}
export default Main;