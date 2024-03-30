import React, { Component } from 'react'

import { getDownloadURL } from 'firebase/storage';
class ToolCard extends Component {
  
    constructor(props) {
        super(props);
        this.state={
          
            
        }
    }


   

    
    errorDownload2=()=>{
      alert("Dosyaları indirebilmek için kayıt olmalısınız.")
    }
  
    render() {
        
    return (
      
      this.props.user ?
           (<div className='mb-4'> 
              <div className="card boxShadow">
                <img src={`${this.props.image}`} className="card-img-top ml-4 mt-3" alt="..." style={{width:"100px"}} />
                <div className="card-body">
                  <h5 className="card-title myTextAbout4">{this.props.title}</h5>
                  <p className="card-text myTextAbout3">{this.props.text}</p>
                  <a className="btn myTextAbout5 text-white" target="_blank" href={`${this.props.DownloadUrl}`} style={{borderRadius:"20px",backgroundColor:"#00488b" }}>İndir</a>
                </div>
              </div>       
           </div>):
          (<div className='mb-4'>    
             <div className="card boxShadow">
                <img src={`${this.props.image}`} className="card-img-top ml-4 mt-3" alt="..." style={{width:"100px"}} />
                <div className="card-body">
                  <h5 className="card-title myTextAbout4">{this.props.title}</h5>
                  <p className="card-text myTextAbout3">{this.props.text}</p>
                  <button className="btn myTextAbout5 text-white" onClick={this.errorDownload2} style={{borderRadius:"20px",backgroundColor:"#00488b" }}>İndir</button>
                </div>
              </div> 
          </div>)
       
    )
  }
}

export default ToolCard
