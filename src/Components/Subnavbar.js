import React, { Component } from 'react'

class Subnavbar extends Component {
  render() {
    const subNavStyle=({isActive})=>{
      return {
        backgroundColor: isActive? "3c008b" :null
      }
    }
    return (
    
            <div className='container col-xl text-white pb-0 myText '>
              <ul className="nav nav-pills mb-3  " id="pills-tab" role="tablist">
  <li className="nav-item"  role="presentation">
    <button className="nav-link active myNavFont" data-target="#carouselExampleIndicators" data-slide-to="0" style={{borderRadius:"100px"}}
    id="pills-home-tab" data-toggle="pill"  type="button" role="tab" aria-controls="pills-home" aria-selected="true">
      R Studio</button>
  </li>
  <li className="nav-item "  role="presentation">
    <button className="nav-link myNavFont "data-target="#carouselExampleIndicators" data-slide-to="1" style={{borderRadius:"100px"}}
     id="pills-profile-tab" data-toggle="pill" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
      YouTube</button>
  </li>
  <li className="nav-item "  role="presentation">
    <button className="nav-link myNavFont" data-target="#carouselExampleIndicators" data-slide-to="2" style={{borderRadius:"100px"}}
     id="pills-contact-tab" data-toggle="pill" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
      Yeni</button>
  </li>
</ul>


      </div>
    )
  }
}

export default Subnavbar
