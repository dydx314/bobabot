import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FaceDetection from './components/camera.js'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/faceRecoginition">FaceDetection</Link>
          </li>
        </ul>

        <hr />
        <Route path="/faceRecoginition" component={FaceDetection} />
      </div>
    </Router>
  );
}
export default App;