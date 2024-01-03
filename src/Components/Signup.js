import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = ( props ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [inequality, setInequality] = useState(false)
  

  const Navigate=useNavigate()

  const clearInput = () => {
    setEmail("");
    setPassword("");
    setPassword2("");
    setNickname("");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if(password!=password2){
      setInequality(true)

    }else if(password==password2){
    
    try {
      await createUserWithEmailAndPassword(props.auth, email, password);
      console.log('Kullanıcı Oluşturuldu');
      setSuccess(true);
      Navigate("/Home")
    } catch (error) {
      console.error('Kullanıcı Oluşturma Başarısız', error.message);
    }
    clearInput();
  }
  };

  const eventHandler = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      {
       props.user ? (<div>Selam</div>):(<div className="container-fluid " style={{ height: "100vh", marginTop: "40px" }}>
        <div className="container-lg" style={{ borderRadius: "5px", backgroundColor: "whitesmoke", border: "1px solid rgb(255, 255, 255)", paddingTop: "10px" }}>
          <p style={{ marginTop: "10px" }} className='myTextAbout4'>Kayıt Ol</p>
          <hr />
          <form>
            <div className="form-group row">
              <label htmlFor="inputname" className="col-sm-2 col-form-label myTextAbout3">Kullanıcı Adı</label>
              <div className="col-sm-10">
                <input
                  name='nickname'
                  type="nickname"
                  className="form-control"
                  id="inputname"
                  value={nickname}
                  onChange={eventHandler} />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="inputEmail1" className="myTextAbout3 col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  name='email'
                  className="form-control "
                  id="inputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword2" className="col-sm-2 col-form-label myTextAbout3">Parola</label>
              <div className="col-sm-10">
                <input
                  name='password'
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label myTextAbout3">Parola Tekrar</label>
              <div className="col-sm-10">
                <input
                  name='password2'
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)} />
              </div>
            </div>
              {inequality?(<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Parolalar eşleşmiyor!</strong> Parolaların aynı olduğundan emin olunuz.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>): <div></div> }            
            <div className="form-group row">
              <div className="col-sm-10 ">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label myTextAbout10" style={{ fontSize: "300" }} htmlFor="gridCheck1">
                    Gizlilik politikasını kabul ediyorum.
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row align-items-center">
              <div className="col-sm-12 d-flex">
                <button onClick={handleSignUp} type="submit" className="btn btn-lg btn-block myTextAbout5 text-white" style={{ backgroundColor: "#00488b", width: "100%" }}><strong>ÜYE OL</strong></button>
              </div>
            </div>
          </form>
          <div style={{ marginLeft: "0px", marginBottom: "16px" }}>
            <p className="text-black-50 myTextAbout11" style={{ display: "inline" }}>Üyeliğiniz varsa</p>
            <Link to="/Login" className="text-primary"> giriş yapın</Link>
          </div>
        </div>
      </div>)}
    </div>
  );
}
export default Signup