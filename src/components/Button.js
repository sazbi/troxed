import React from 'react';

class Button extends React.Component {
  audioStop(){
    Audio.pause();
  }
  playAudio(name, audio){
    // this.audioStop();
    var url = '/sounds/' + name
    new Audio(url).play()
  }
  render() {
    return(
      <button className="button" onClick={() => this.playAudio(this.props.fileName, this.props.audio)}>{this.props.objectName}</button>
    )
  }
}
export default Button