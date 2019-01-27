import React, { Component } from 'react';
import Camera from 'react-camera';

class CameraPage extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
    this.handleCamera = props.handleCamera;
  }

  takePicture() {
    this.camera.capture()
      .then(blob => {
        this.img.src = URL.createObjectURL(blob);
        this.img.onload = () => { URL.revokeObjectURL(this.src); }
      }).then(()=>{
        // this.handleCamera(this.img);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.takePicture}>Detect</button>
          <img
            alt="camera picture"
            style={style.captureImage}
            ref={(img) => {
              this.img = img;
            }}
          />
          <Camera
            style={style.preview}
            ref={(cam) => {
              this.camera = cam;
            }}
          >
          </Camera>
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
  captureImage: {
    width: '100%',
  }
};

export default CameraPage;
