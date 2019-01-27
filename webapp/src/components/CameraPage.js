import React, { Component } from 'react';
import Camera from 'react-camera';
import history from '../history.js';

const faceRecognition = (imgUrl) => {
  return null;
}



class CameraPage extends Component {

  photoTaken = false;
  photo = {}

  constructor(props) {
    super(props);
    this.state = { photoTaken: false, user: null };
    this.takePicture = this.takePicture.bind(this);
    this.handleCamera = props.handleCamera;
  }

  takePicture() {
    this.camera.capture()
      .then(blob => {
        this.img.src = URL.createObjectURL(blob);
        this.img.onload = () => { URL.revokeObjectURL(this.src); }
      }).then(() => {
        let userId = faceRecognition(this.img.src);
        this.setState({ photoTaken: true });
        if (userId) {
          this.setState({ user: userId });
          history.push('/recommandation');
        }
      });
  }

  ContinueOption = () => {
    if (this.state.photoTaken) {
      return (
        <div>
          <h1>Cannot find your face in database. Continue as new user, or retry.</h1>
          <button onClick={()=>{history.push('/recommandation')}}>Continue</button>
          <button onClick={()=>{this.setState({photoTaken:false})}}>Retry</button>
        </div>
      )
    }
    return null;
  }

  CameraComponent = () => {
    if (this.state.photoTaken) return null;
    return (
      <div style={style.container}>

        <button onClick={this.takePicture}>Detect</button>
        <Camera

style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
        </Camera>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <this.ContinueOption></this.ContinueOption>
          <this.CameraComponent></this.CameraComponent>
          <img
            alt="camera"
            style={style.captureImage}
            ref={(img) => {
              this.img = img;
            }}
          />
        </header>
      </div>
    );
  }
}

const style = {
  preview: {
    position: 'relative',
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '100%',
  }
};

export default CameraPage;
