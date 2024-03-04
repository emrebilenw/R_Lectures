import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import "animate.css"
 
const Navbar = (props) => {
  
  const navLinkStyles = ({ isActive }) => {
    return {
      opacity: isActive ? 1 : 0.5,
      
    };
  };

  const handleLogout=(e)=>{
    e.preventDefault();
    props.auth.signOut().then(()=>{
      console.log("User logged out")
    });

  }
  const handleMouseEnter = (e) => {
    e.target.classList.add('animate__animated', 'animate__pulse',"animate__fast","animate__repeat-2");
  };
  
  const handleMouseLeave = (e) => {
    e.target.classList.remove('animate__animated', 'animate__pulse',"animate__fast","animate__repeat-2");
  };
  return (
    
    <div>
      <div className="mt-2 ml-0 mr-0 w-100">
        <div className='row d-flex'>
          <div className='col-1 p-0'></div>
          <div className='col-10 p-0'>
            <nav className="navbar navbar-expand-lg navbar-light myText ">
              <NavLink style={navLinkStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" navbar-brand text-white nav-link pl-0" to="/Home">Marmara Data</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                
                <ul className="navbar-nav justify-content-around" style={{flexGrow:"0.5"}}>
                  <li className="nav-item active">
                    <NavLink style={navLinkStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="/About" className="nav-link text-white">Hakkımda <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink style={navLinkStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="/Tools" className=" nav-link text-white" >Araçlar</NavLink>
                    
                  </li>
                  <li className="nav-item ">
                    <NavLink style={navLinkStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="/Lectures" className=" nav-link text-white" >Ders Notları</NavLink>
                  </li>
                 
                  <li className="nav-item ">
                    <NavLink style={navLinkStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="/Youtube" className=" nav-link text-white" >Youtube</NavLink>
                  </li>
                  
                  
                </ul>
                { props.user ?(<div className="d-flex justify-content-between align-items-center">
                  
                    <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleLogout} style={{opacity:"0.5"}} className='text-decoration-none text-white mr-4' href="#">Çıkış Yap</a>
                  
                  
                    <NavLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="/Account" ><Button text="Profilim"></Button></NavLink>
                  

                </div>):
                (<div className="d-flex justify-content-between align-items-center">
                  
                    <NavLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={navLinkStyles} className='text-decoration-none text-white mr-4' to="/Login">Giriş Yap</NavLink>
                  
                  
                    <NavLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to="/Signup"><Button text="Kayıt ol"></Button></NavLink>
                  

                </div>)
                }
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;