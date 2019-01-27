import React from 'react';
import StarryNight from './star_night_sky.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from '../history.js';
import CameraPage from './CameraPage.js'
class Home extends React.Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
          <div>
          <img src={StarryNight} height="1080" width="1920" className='fill'/>
          <div style={style.Headings}>
          <ul>
          <p>
          <a style={style.Headings} 
          onClick={()=>{let path='/camerapage'; 
                          history.push(path);
                        }}>Facial Detection</a>
          </p>
          </ul>
          </div>
            </div>
        );
    };
}
const style = {
    Headings: {
        position: 'absolute',
        top: '130px',
        left: '36%',
        right: '50%',
        width: 'fit-content'
      }
  };
export default Home;
