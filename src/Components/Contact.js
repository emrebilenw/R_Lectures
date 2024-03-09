import React, { useState, useEffect } from 'react';

function Contact() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Effect runs only once on mount

  return (
    <div>
      {screenWidth > 1000 ? (
        <div>
          <div className='row'>  
            <div className='col-1'></div>
            <div className="list-unstyled ml-0 pl-0 col-10">
              <center>
                <h1 className='mb-5 mt-5'>İletişim için: <span className="badge badge-light">emrebilen1571@hotmail.com</span></h1> 
              </center>    
            </div>
          </div>
          <div style={{width:"400px",height:"500px"}}></div>
        </div>
      ) :  <div> <center>
      <div className='mt-5'>
         
       <div className=' bg-light align-items-center d-flex justify-content-center ' style={{borderRadius:"10px"}}>
        <p className='mt-3' style={{fontSize:"25px"}}>emrebilen1571@hotmail.com</p>
       </div>
      </div>
      <div style={{width:"400px",height:"500px"}}></div></center>
    </div> }
    </div>
  );
}

export default Contact;