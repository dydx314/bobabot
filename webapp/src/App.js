import React from "react";
import { BrowserRouter as Router, Route,Redirect, Link } from "react-router-dom";
import CameraPage from './components/camera.js'
import home from './components/home.js'

function App() {
  return (
    <Router>
      <div>
        

        <hr />
        <Route path="/" render={ () => <Redirect to="/home" />}/>
        <Route path="/home" render={ () => <home/> } />
        <Route path="/CameraPage" render={ () => <Camera/>} />
      </div>
    </Router>
  );
}
export default App;