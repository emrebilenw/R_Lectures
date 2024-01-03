import React, { Component } from 'react'
import Subnavbar from './Subnavbar'
class HomeBox extends Component {
  render() {
    return (
      <div className='mt-5 boxShadow2' style={{borderRadius:"5px"}}> 
        <div
        style={{
        backgroundColor:"rgb(237, 237, 237)",
        width:"100%",
        height:"480px",
        borderRadius:"5px"
        }}>
          <div className=' ml-0 pl-0 pr-0 ml-2 pt-3 container align-items-center '>   
            <Subnavbar></Subnavbar>
            <div id="carouselExampleIndicators" className="carousel slide mt-3 d-flex" data-ride="carousel">
  
  <div className="carousel-inner d-flex ">
    <div className="carousel-item active align-items-center">
      <img src='/Images/WebImg1.png' className="d-block d-flex "style={{borderRadius:"4px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/Images/YoutubeIcon.png" className="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/Images/indir (2).jpg" className="d-block " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeBox
