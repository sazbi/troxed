import Button from "./Button";
import sounds from "./sounds";
import React from "react";



class Board extends React.Component {
  generateAudio(){
    var audio = new Audio
    return audio
  }
  
  buttons(){
    return(
      sounds.map((obj, i)=>(
        <Button key={i} objectName={obj.objectName} fileName={obj.fileName} audio={this.generateAudio()} />
      ))
    )
  }
  render() {
    return(
      <div>
        <div className="soundboard-title">
            <h3>Troxed</h3>
            <h3>War Ensemble</h3>
            <h3>US - Illidan - PVP</h3>
        </div>
        <div className='first-row'>
          <Button objectName={'Arch Scream'} fileName={'arch_scream.mp3'} />
          <Button objectName={'Full Arch'} fileName={'full_arch.mp3'} />
          <div className="soundboard-filler"></div>
          <Button objectName={'Fel Spam'} fileName={'fel_spam.mp3'} />
          <Button objectName={'If you value'} fileName={'if_you_value.mp3'} />

          <Button objectName={"Cat's Edge"} fileName={'cats_edge.mp3'} />
          <div className="soundboard-filler"></div>
          <div className="soundboard-filler"></div>
          <div className="soundboard-filler"></div>
          <Button objectName={"I'm Talking"} fileName={'im_talking.mp3'} />
          
        </div>
        <div className="sound-board-background">
          {this.buttons()}
        </div>
      </div>
    )
  }
}
export default Board