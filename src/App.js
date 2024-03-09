import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import Hakkımda from './Components/Hakkımda';
import Tools from './Components/Tools';
import Login from './Components/Login';
import AuthStatus from './Components/AuthStatus';
import Signup from './Components/Signup';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Contact from './Components/Contact';
import Lesson from './Components/Lesson';
import Youtube from './Components/Youtube';
import Profile from './Components/Profile';
import { NavLink } from 'react-router-dom';

const App = ({ auth, db, docTopPromise, getDocumentById, functions, storage }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      checkAdmin(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const checkAdmin = async (user) => {
    if (user) {
      try {
        const idTokenResult = await user.getIdTokenResult();
        setIsAdmin(idTokenResult.claims.admin || false);
      } catch (error) {
        console.error('Error fetching admin status:', error);
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      opacity: isActive ? 1 : 0.5,
    };
  };

  return (
    <div className="App " style={{overflowX:"hidden"}}>

      <Navbar auth={auth} user={user}></Navbar>

      <Routes>
        <Route path='/Home' element={<HomePage></HomePage>}>
        </Route>

        <Route path='/' element={<HomePage></HomePage>}>
        </Route>

        <Route path='/About' element={<Hakkımda></Hakkımda>}>
        </Route>

        <Route path='/Tools' element={<Tools user={user} db={db} docTopPromise={docTopPromise} isAdmin={isAdmin} storage={storage} ></Tools>}>
        </Route>

        <Route path='/Login' element={<Login auth={auth} user={user}></Login>}>
        </Route>

        <Route path='/Signup' element={<Signup auth={auth} db={db} user={user} docTopPromise={docTopPromise}></Signup>}>
        </Route>

        <Route path='/Contact' element={<Contact></Contact>}>
        </Route>

        <Route path='/Lectures' element={<Lesson screenWidth={screenWidth} user={user} storage={storage} db={db} docTopPromise={docTopPromise} isAdmin={isAdmin}></Lesson>}>
        </Route>

        <Route path='/YouTube' element={<Youtube></Youtube>}>
        </Route>

        <Route path='/Account' element={<Profile isAdmin={isAdmin} auth={auth} user={user} db={db} getDocumentById={getDocumentById} functions={functions}></Profile>}>
        </Route>

      </Routes>

      {screenWidth > 1000 ? (
        <div style={{ width: '100%', height: '500px', backgroundColor: '#00488b' }}>
          {<div style={{ width: '100%', height: '500px', backgroundColor: '#00488b' }}>
<div className='row'>
  <div className='col-2'></div>
  <div className='col-8 myInfoText mt-5 d-flex justify-content-center align-items-center'>
    <p> Eğitimlerimiz hakkında daha fazla bilgi almak ve kaydolmak için bize ulaşın!</p>
  </div>
  <div className='col-2'></div>

  <div className='col-2'></div>
  <div className='col-8 myInfoText2 d-flex justify-content-center align-items-center'>
    <p> emrebilen1571@hotmail.com </p>
  </div>
  <div className='col-2'></div>

  <div className='col-1'></div>
  <div className='col-10'>
    <hr />
  </div>
  <div className='col-1'></div>

  <div className='col-1'></div>
  <div className='col-10 mt-5 myInfoText3 d-flex justify-content-between align-items-center'>
    <p>Marmara Data</p>
    <p>Hesap İşlemleri</p>
    <p> Site içi Bağlantılar </p>
  </div>
  <div className='col-1'></div>

  <div className='col-1'></div>
  <div className='col-10 mt-1 myInfoText4 d-flex justify-content-between align-items-center'>
    <p></p>

    <div style={{ marginLeft: "140px" }} className=' justify-content-center'>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Account">Hesabım</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Login">Giriş Yap</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Signup">Kayıt Ol</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Contact">Hesap Silme Talebi</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Contact">Şifre Değişim Talebi</NavLink>
    </div>

    <div style={{ marginRight: "40px" }} className=' justify-content-center'>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Home">Ana Sayfa</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/About">Hakkımda</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Tools">Araçlar</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Lectures">Ders Notları</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Youtube">Youtube</NavLink>
    </div>

  </div>

  <div className='col-1'></div>
</div>
</div>}
        </div>
      ) : (
        <div  style={{ width: '100%', height: '500px', backgroundColor: '#00488b' }}>
          {
<div className='' style={{ width: '100%', height: '500px', backgroundColor: '#00488b' }}>
<div className='row ' style={{ backgroundColor: "#00488b", height:"500px"}}>
  <div className='col-1 '></div>
  <div className='col-10 myInfoText mt-5 d-flex justify-content-center align-items-center'>
    <p> Eğitimlerimiz hakkında daha fazla bilgi almak ve kaydolmak için bize ulaşın!</p>
  </div>
  <div className='col-1'></div>

  <div className='col-1'></div>
  <div className='col-10 myInfoText2 d-flex justify-content-center align-items-center'>
    <p> emrebilen1571@hotmail.com </p>
  </div>
  <div className='col-1'></div>

  <div className='col-1'></div>
  <div className='col-10'>
    <hr />
  </div>
  <div className='col-1'></div>

  <div className='col-1'></div>
  <div className='col-10 mt-5 myInfoText3phone d-flex justify-content-center align-items-center'> <p>Marmara Data</p></div>
  <div className='col-1'></div>

  <div className='col-1'></div>
  <div className='col-10 mt-5 myInfoText3phone d-flex justify-content-between align-items-center'> <p>Hesap İşlemleri</p> <p> Site içi Bağlantılar </p></div>
  <div className='col-1'></div>

  <div className='col-1'></div>
  <div className='col-10 mt-1 myInfoText4phone d-flex justify-content-between align-items-center '>

    <div style={{ marginLeft: "" }} className=' justify-content-center'>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Account">Hesabım</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Login">Giriş Yap</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Signup">Kayıt Ol</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Contact">Hesap Silme Talebi</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Contact">Şifre Değişim Talebi</NavLink>
    </div>

    <div style={{ marginRight: "" }} className=' justify-content-center'>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Home">Ana Sayfa</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/About">Hakkımda</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Tools">Araçlar</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Lectures">Ders Notları</NavLink>
      <NavLink className="nav-link text-white pt-0 pb-0" style={navLinkStyles} to="/Youtube">Youtube</NavLink>
    </div>

  </div>
  <div className='pt-0 mt-0' style={{width:"100%", height:"50px",backgroundColor:"#00488b"}}></div>
</div>
</div>
}
        </div>
      )}

    </div>
  );
};

export default App;



