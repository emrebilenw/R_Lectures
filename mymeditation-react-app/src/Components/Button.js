import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-lg myText"  style={{borderRadius:"25px", backgroundColor:"white"}}>{this.props.text}</button>
      </div>
    )
  }
}

export default Button
