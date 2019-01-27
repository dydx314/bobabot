import React, { Component } from 'react';
import Camera from 'react-camera';

class CameraPage extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
      .then(blob => {
        this.img.src = URL.createObjectURL(blob);
        this.img.onload = () => { URL.revokeObjectURL(this.src); }
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Camera
            style={style.preview}
            ref={(cam) => {
              this.camera = cam;
            }}
          >
          </Camera>
          <button onClick={this.takePicture}>Detect</button>
          <img
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
  captureImage: {
    width: '100%',
  }
};

export default CameraPage;
