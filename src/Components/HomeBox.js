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
            <div id="carouselExampleIndicators" class="carousel slide mt-3 d-flex" data-ride="carousel">
  
  <div class="carousel-inner d-flex ">
    <div class="carousel-item active align-items-center">
      <img src='/Images/WebImg1.png' class="d-block d-flex "style={{borderRadius:"4px"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/Images/YoutubeIcon.png" class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/Images/indir (2).jpg" class="d-block " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeBox
