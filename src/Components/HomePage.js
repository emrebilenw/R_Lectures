import React, { Component } from 'react'
import ButtonSmall from './ButtonSmall'
import HomeBox from './HomeBox'
import { Link } from 'react-router-dom';
export class HomePage extends Component {
  render() {
    return (
      <div>
        <div className='ml-4 mt-5 container'>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-11'>
            <h5 className='myFont inline ' style={{fontSize:"100px",color:"rgb(235,235,235)"}}>İSTATİSTİK VE</h5>
            <h5 className='myFont inline' style={{fontSize:"100px",color:"rgb(235,235,235)"}}>PROGRAMLAMA</h5>
            <h5 className='myFont inline' style={{fontSize:"50px",color:"rgb(235,235,235)", opacity:"0.5"}}>ÖĞRENMEK İSTİYORSAN,</h5>
          </div>   
        </div>
          </div>
      
          <div className='ml-4 container mt-2'>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-6'>
            <div className='mt-4'>
              <Link to="/Tools">
              <ButtonSmall text="Araçları kullanmaya başla! ">
              </ButtonSmall>
              </Link>
            </div>
          </div>   
        </div>
          </div>

          

          <div className='ml-4 container mt-1'>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-11'>
            <HomeBox>

            </HomeBox>
          </div>   
        </div>
          </div>
          <hr />
      </div>
    )
  }
}

export default HomePage
