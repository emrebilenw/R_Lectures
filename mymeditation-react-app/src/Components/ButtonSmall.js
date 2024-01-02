import React, { Component } from 'react'

class ButtonSmall extends Component {
  render() {
    return (
      <div>
        <button className="btn myText  "  style={{borderRadius:"20px", backgroundColor:"white"}}>{this.props.text} </button>
      </div>
    )
  }
}

export default ButtonSmall
