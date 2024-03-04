import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = (props) => { 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const eventHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(props.auth, formData.email, formData.password);
      console.log('Giriş Başarılı');
    } catch (error) {
      console.error('Giriş Başarısız', error.message);
    }
  };

  return (

    
    <div>
      { props.user ?(<div>SELAM</div>):
      (<div className="container-fluid " style={{ height: "100vh", marginTop: "40px" }}>
        <div className="container-lg" style={{ borderRadius: "5px", backgroundColor: "whitesmoke", border: "1px solid rgb(255, 255, 255)", paddingTop: "10px" }}>
          <p style={{ marginTop: "10px" }} className='myTextAbout4'>Giriş Yap</p>
          <hr />
          <form>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="myTextAbout3 col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  name='email'
                  className="form-control "
                  id="inputEmail3"
                  value={formData.email}
                  onChange={eventHandler} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword1" className="col-sm-2 col-form-label myTextAbout3">Parola</label>
              <div className="col-sm-10">
                <input
                  name='password'
                  type="password"
                  className="form-control"
                  id="inputPassword1"
                  value={formData.password}
                  onChange={eventHandler} />
              </div>
            </div>
            <div className="form-group row" style={{ marginLeft: "0px", marginBottom: "8px" }}>
              <p><a href="#" className=" text-muted myTextAbout11">Parolamı Unuttum</a></p>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 ">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label myTextAbout10" style={{ fontSize: "300" }} htmlFor="gridCheck1">
                    Oturumu Açık Bırak
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row align-items-center">
              <div className="col-sm-12 d-flex">
                <button onClick={handleLogin} type="submit" className="btn btn-lg btn-block myTextAbout5 text-white" style={{ backgroundColor: "#00488b", width: "100%" }}><strong>GİRİŞ YAP</strong></button>
              </div>
            </div>
          </form>
          <div style={{ marginLeft: "0px", marginBottom: "16px" }}>
            <p className="text-black-50 myTextAbout11" style={{ display: "inline" }}>Üyeliğiniz yoksa</p>
            <Link to="/Signup" className="text-primary"> yeni üyelik oluşturun</Link>
          </div>
        </div>
      </div>)
      }
    </div>
  );
};

export default Login;