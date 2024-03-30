import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore"; 
import {  doc,setDoc} from "firebase/firestore"; 
import { useEffect } from 'react';
const Signup = ( props ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [nickname, setNickname] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [inequality, setInequality] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [checkPass, setCheckPass]= useState(false)
  const [checkNick, setCheckNick]= useState(false)
  const [nameData, setNameData] = useState([]);
  const [nickequality, setNickequality]= useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await props.docTopPromise("Users", props.db);
        setNameData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props]); // Ensure useEffect runs when props change

  useEffect(() => {
    
  }, [attempt]);
  useEffect(()=>{
    checkerNick(nickname)
    equalNicks(nickname)
  },[nickname])
  useEffect(()=>{
    checkerPassword(password)
  },[password])
  

  const clearInput = () => {
    setEmail("");
    setPassword("");
    setPassword2("");
    setNickname("");
  };

  const equalNicks = (nickname) => {
    if(nameData.some(item => item.data.name === nickname)){
      setNickequality(true)
    }else{
      setNickequality(false)
    }
  }
  const checkerNick = (nickname) => {
    if (nickname.length >= 3 && nickname.length <= 20 && !nameData.some(item => item.data.name === nickname)) {
      setCheckNick(true);
      
    } else {
      setCheckNick(false);
    }
  };
  const checkerPassword=(password)=>{
    if(password.length>= 7 && password.length <=50){
      setCheckPass(true)
    }else{
      setCheckPass(false)
    }

  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    if(password!==password2){
      setInequality(true)
      console.log("Parolaların aynı olup olmadığından emin olun")

    }else if(password===password2){
      if(checkNick && checkPass){

      }
    
    try {
      const response=await createUserWithEmailAndPassword(props.auth, email, password)
      
      const userCollectionRef = collection(props.db, "Users");
      const userDocRef = doc(userCollectionRef, response.user.uid);
      
      await setDoc(userDocRef, {
        name: nickname
      });

      setSuccess(true);
      
    } catch (error) {
      console.error('Kullanıcı Oluşturma Başarısız', error.message);
      setAttempt(attempt+1)
    }
    clearInput();
  }else(console.log("Error, occured in equality between passwords"))
  };

  const eventHandler = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      {
       props.user ? (<div>
                      
                       
        <div className='row ml-5'>
          <div className='col-5 mt-5'>
            <img className='ml-5' src='/images/imageWelcome.png'>
            </img>
          </div>
          <div className='col-7 mt-5'>
            <h5 className='myFont inline ' style={{fontSize:"100px",color:"rgb(235,235,235)"}}>ARAMIZA HOŞGELDİN,</h5>
            <h5 className='myFont inline' style={{fontSize:"100px",color:"rgb(235,235,235)"}}></h5>
            <h5 className='myFont inline mt-4' style={{fontSize:"50px",color:"rgb(235,235,235)", opacity:"0.5"}}>ARAÇLARI DİLEDİĞİN</h5>
            <h5 className='myFont inline mt-3' style={{fontSize:"50px",color:"rgb(235,235,235)", opacity:"0.5"}}>GİBİ İNDİREBİLİRSİN.</h5>
          </div>   
        
      </div>
      <div style={{width:"100px",height:"100px"}}>

      </div>
      </div>):(<div className="container-fluid " style={{ height: "100vh", marginTop: "40px" }}>
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
            
            {checkNick || nickname<1 ?null:<div class="alert alert-warning" role="alert">Kullanıcı ismi min 3, max 20 harf içerebilir!</div>}
            {nickequality?<div class="alert alert-danger" role="alert">Bu kullanıcı adı başka biri tarafından kullanılmakta!</div>:null}
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

            {checkPass || password<1?null:<div class="alert alert-warning" role="alert">Yetersiz uzunluk, minimum 7 karakter giriniz</div>}
            

              {inequality?(<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Parolalar eşleşmiyor!</strong> Parolaların aynı olduğundan emin olunuz.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>): <div></div> }            
            
            <div className="form-group row align-items-center">
              <div className="col-sm-12 d-flex">
                <button onClick={handleSignUp} id="liveToastBtn" type="submit" className="btn btn-lg btn-block myTextAbout5 text-white" style={{ backgroundColor: "#00488b", width: "100%" }}><strong>ÜYE OL</strong></button>
              </div>
              {attempt==0?null:<div className='ml-3 mt-1'>
                  <span  className="badge badge-light ">Hatalı giriş denemesi, lütfen bilgileri doğru girdiğinizden emin olunuz</span>{attempt>1?<span class="badge badge-danger">{attempt}</span>:null}
                </div>}
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