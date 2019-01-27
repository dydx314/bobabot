import React from "react";
import { BrowserRouter as Router, Route,Redirect, Link } from "react-router-dom";
import CameraPage from '../Components/CameraPage.js'
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

        </div>
      </main>
    )
  }
}
export default Main;