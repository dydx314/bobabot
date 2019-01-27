import { ReactMic } from 'react-mic';
import React, { Component } from 'react';

 
class MicrophonePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }
 
  startRecording = () => {
    this.setState({
      record: true
    });
  }
 
  stopRecording = () => {
    this.setState({
      record: false
    });
  }
 
  onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  onStop = (recordedBlob) => {
    this.setState({
        blobUrl: recordedBlob.blobUrl
    })
  }
 
  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onSave={this.onSave}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
        <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
      </div>
    );
  }
}

export default MicrophonePage;