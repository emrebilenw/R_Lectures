import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

 
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
  return (

    <div>
      <div className="mt-2 ml-0 mr-0 w-100">
        <div className='row d-flex'>
          <div className='col-1 p-0'></div>
          <div className='col-11 p-0'>
            <nav className="navbar navbar-expand-lg navbar-light myText pl-2">
              <NavLink style={navLinkStyles} className="navbar-brand text-white nav-link MR-X" to="/Home">Marmara Data</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex justify-content-around row">
                  <li className="nav-item active col-1">
                    <NavLink style={navLinkStyles} to="/About" className="nav-link text-white mr-5">Hakkımda <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item col-1">
                    <NavLink style={navLinkStyles} to="/Tools" className="ml-3 nav-link text-white" >Araçlar</NavLink>
                    
                  </li>

                  <li className="nav-item dropdown col-1">
                    <NavLink style={{ opacity: "0.5" }} className="nav-link dropdown-toggle text-white ml-1" role="button" data-toggle="dropdown" aria-expanded="false">
                      Eğitim
                    </NavLink>

                    <div className="dropdown-menu">
                      <NavLink style={navLinkStyles} to="/Notes" className="dropdown-item " >Ders notları</NavLink>
                      <NavLink style={navLinkStyles} to="/Tools" className="dropdown-item " >Araçlar</NavLink>
                      <div className="dropdown-divider "></div>
                      <NavLink style={navLinkStyles} to="YouTube" className="dropdown-item ">Youtube</NavLink>
                    </div>
                  </li>
                  <li className="nav-item col-1">
                    <NavLink style={navLinkStyles} to="/Contact" className=" nav-link text-white" >İletişim</NavLink>
                  </li>
                </ul>
                { props.user ?(<div className="my-2 my-lg-0 ml-auto d-flex mr-5 ">
                  <div className='mr-4 d-flex align-items-center'>
                    <a onClick={handleLogout} style={{opacity:"0.5"}} className='text-decoration-none text-white' href="#">Çıkış Yap</a>
                  </div>
                  <div className=''>
                    <NavLink to="/Account"><Button text="Profilim"></Button></NavLink>
                  </div>

                </div>):
                (<div className="my-2 my-lg-0 ml-auto d-flex mr-5 ">
                  <div className='mr-4 d-flex align-items-center'>
                    <NavLink style={navLinkStyles} className='text-decoration-none text-white' to="/Login">Giriş Yap</NavLink>
                  </div>
                  <div className=''>
                    <NavLink to="/Signup"><Button text="Kayıt ol"></Button></NavLink>
                  </div>

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