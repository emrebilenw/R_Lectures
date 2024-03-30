import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = (props) => { 
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [attempt, setAttempt] = useState(0)

  const eventHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Effect runs only once on mount

  useEffect(() => {
    
  }, [attempt]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(props.auth, formData.email, formData.password);
      console.log('Giriş Başarılı');
    } catch (error) {
      console.error('Giriş Başarısız', error.message);
      
      setAttempt(attempt+1)
      
    }
  };

  return (
    <div>
      { screenWidth > 1000 ? (
        props.user ? (
          <div>
            <div className='row ml-5'>
              <div className='col-5 mt-5'>
                <img className='ml-5' src='/images/imageWelcome.png'></img>
              </div>
              <div className='col-7 mt-5'>
                <h5 className='myFont inline ' style={{fontSize:"100px",color:"rgb(235,235,235)"}}>HOŞGELDİN,</h5>
                <h5 className='myFont inline mt-4' style={{fontSize:"50px",color:"rgb(235,235,235)", opacity:"0.5"}}>ARAÇLARI DİLEDİĞİN</h5>
                <h5 className='myFont inline mt-3' style={{fontSize:"50px",color:"rgb(235,235,235)", opacity:"0.5"}}>GİBİ İNDİREBİLİRSİN.</h5>
              </div>   
            </div>
            <div style={{width:"100px",height:"100px"}}></div>
          </div>
        ) : (
          <div className="container-fluid " style={{ height: "100vh", marginTop: "40px" }}>
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
                  {attempt==0?null:<div className='ml-3 mt-1'>
                      <span  className="badge badge-light ">Hatalı giriş denemesi, lütfen bilgileri doğru girdiğinizden emin olunuz</span>{attempt>1?<span class="badge badge-danger">{attempt}</span>:null}
                    </div>}
                </div>
              </form>
              <div style={{ marginLeft: "0px", marginBottom: "16px" }}>
                <p className="text-black-50 myTextAbout11" style={{ display: "inline" }}>Üyeliğiniz yoksa</p>
                <Link to="/Signup" className="text-primary"> yeni üyelik oluşturun</Link>
              </div>
            </div>
          </div>
        )
      ) : (
        props.user ? (
          <div>
            <div className='row '>
              <div className='col-1 mt-5'>
                <img className=''style={{width:"400px",marginTop:"200px"}} src='/images/imageWelcome.png'></img>
              </div>
              <div className='col-7 mt-5'>
                <h5 className='myFontPhone inline mb-0 pb-0' style={{fontSize:"50px",color:"rgb(235,235,235)"}}>HOŞGELDİN,</h5>
                <h5 className='myFont inline pt-0 mt-0 mb-0 pb-0' style={{fontSize:"25px",color:"rgb(235,235,235)", opacity:"0.8"}}>ARAÇLARI DİLEDİĞİN</h5>
                <h5 className='myFont inline ' style={{fontSize:"25px",color:"rgb(235,235,235)", opacity:"0.8"}}>GİBİ İNDİREBİLİRSİN.</h5>
              </div>   
            </div>
            <div style={{width:"100px",height:"100px"}}></div>
          </div>
        ) : (
          <div className="container-fluid " style={{ height: "100vh", marginTop: "40px" }}>
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
                  {attempt==0?null:<div className='ml-3 mt-1'>
                      <span  className="badge badge-light ">Hatalı giriş denemesi, lütfen bilgileri doğru girdiğinizden emin olunuz</span>{attempt>1?<span class="badge badge-danger">{attempt}</span>:null}
                    </div>}
                </div>
              </form>
              <div style={{ marginLeft: "0px", marginBottom: "16px" }}>
                <p className="text-black-50 myTextAbout11" style={{ display: "inline" }}>Üyeliğiniz yoksa</p>
                <Link to="/Signup" className="text-primary"> yeni üyelik oluşturun</Link>
              </div>
            </div>
          </div>
        )
      ) }
    </div>
  );
};

export default Login;