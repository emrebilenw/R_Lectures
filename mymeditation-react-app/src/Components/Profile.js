import React from 'react'
import { useEffect, useState } from 'react';
import { getFunctions, httpsCallable } from "firebase/functions";
export default function Profile(props) {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState([]);
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
    const fetchData = async () => {
      try {
        const data = await props.getDocumentById("Users",props.db,props.user.uid);
        setUserData(data);
        
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props]); // Ensure useEffect runs when props change
 

  const handleNewAdmin=(e)=>{
    e.preventDefault();
    const functions = getFunctions();
    const addAdminRole= httpsCallable(functions, 'addAdminRole');
    addAdminRole({email:email}).then(result=>{
      console.log(result)
    })
  }
 

  return (
    <div style={{height:"1000px"}} className='mt-5'>
      
      {screenWidth>1000 ? <div>{props.user?
      <div className='mt-1 d-flex justify-content-between' style={{backgroundColor:"white",marginLeft:"300px",marginRight:"360px", borderRadius:"30px"}}>
        
        <div className='pt-4 pl-4 pb-3' style={{flexGrow:"0.4"}}>
        <ul className="list-unstyled">
            <li className="media"> 
              <div className="media-body">
                <h5 class="mt-0 mb-1 ProfileHeaderTxt">Kullanıcı ismi</h5>
                
                <input className="form-control " id="disabledInput" type="text" placeholder={userData.data && userData.data.name} disabled/>
              </div>
            </li>
            <li className="media my-4">              
              <div className="media-body">
                <h5 className="mt-0 mb-1 ProfileHeaderTxt" >E-posta</h5>
                
                <input className="form-control " id="disabledInput" type="text" placeholder={props.user.email} disabled/>
              </div>
            </li>
            <li>
             {props.isAdmin?
             <form>
              <div class="form-group">
                <label for="exampleFormControlInput1" className='ProfileHeaderTxt'>Make Admin</label>
                <input type="email"
                  name='email'
                  className="form-control "
                  id="inputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='form-group'>
              <button type="button" onClick={handleNewAdmin} class="btn btn-primary btn-lg btn-block">Admin yap</button>
              </div>
             </form>
             :null}
            </li>
          </ul>
        </div>
        <div className='d-flex pl-3 pr-2 align-items-center' style={{borderTopLeftRadius:"30px",
          borderBottomLeftRadius:"30px",
          borderBottomRightRadius:"30px",
          borderTopRightRadius:"30px",
          backgroundColor:"#0084d1",
          width:"100px", 
          flexGrow:"0.5"}}>
            <p className='myInfoText'>Hesap ayarları henüz sitemizde aktif değildir. Hesabınız hakkında problem yaşıyorsanız lütfen bizimle iletişime geçin.</p>
        </div>
         
          
          
          
         
         
        </div>
      

      :(<div className='pl-0 '>
                      
                       
        <div className='row pl-0'>
          <div className='col-5 mt-5 pl-0'>
          <img className='' style={{width:"2000px"}} src='/images/633.png'>
            </img>
          </div>
          <div className='col-7 mt-5'>
            <h5 className='myFont inline mt-5 ' style={{fontSize:"100px",color:"rgb(235,235,235)"}}>OTURUM AÇ,</h5>
            <h5 className='myFont inline' style={{fontSize:"100px",color:"rgb(235,235,235)"}}></h5>
            <h5 className='myFont inline mt-4' style={{fontSize:"50px",color:"rgb(235,235,235)", opacity:"0.5"}}>ARAMIZA KATIL</h5>
            
          </div>   
        
      </div>
      <div style={{width:"100px",height:"100px"}}>

      </div>
      </div>)}</div> :
      
      
      















      
      <div>{props.user?
        <div className='mt-1 d-flex justify-content-center' style={{backgroundColor:"white", borderRadius:"30px"}}>
          
          <div className='pt-4 pl-4 pb-3 mr-3' style={{flexGrow:"0.4"}}>
          <ul className="list-unstyled">
              <li className="media"> 
                <div className="media-body">
                  <h5 className="mt-0 mb-1 ProfileHeaderTxt" style={{fontSize:"20px"}}>Kullanıcı ismi</h5>
                  
                  <input className="form-control " id="disabledInput" type="text" placeholder={userData.data && userData.data.name} disabled/>
                </div>
              </li>
              <li className="media my-4">              
                <div className="media-body">
                  <h5 className="mt-0 mb-1 ProfileHeaderTxt" style={{fontSize:"20px"}} >E-posta</h5>
                  
                  <input className="form-control " id="disabledInput" type="text" placeholder={props.user.email} disabled/>
                </div>
              </li>
              <li>
               {props.isAdmin?
               <form>
                <div className="form-group">
                  <label for="exampleFormControlInput1" className='ProfileHeaderTxt'>Make Admin</label>
                  <input type="email"
                    name='email'
                    className="form-control "
                    id="inputEmail1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                <button type="button" onClick={handleNewAdmin} class="btn btn-primary btn-lg btn-block">Admin yap</button>
                </div>
               </form>
               :null}
              </li>
            </ul>
          </div>
          <div className='d-flex pl-3 pr-2 align-items-center' style={{borderTopLeftRadius:"30px",
            borderBottomLeftRadius:"30px",
            borderBottomRightRadius:"30px",
            borderTopRightRadius:"30px",
            backgroundColor:"#0084d1",
            width:"100px", 
            flexGrow:"0.6"}}>
              <p className='myInfoText' style={{fontSize:"10px"}}>Hesap ayarları henüz sitemizde aktif değildir. Hesabınız hakkında problem yaşıyorsanız lütfen bizimle iletişime geçin.</p>
          </div>
           
            
            
            
           
           
          </div>
        
  
        :(<div className='pl-0 '>
                        
                         
          
            
            <div className='mt-5 ml-4' >
              <h5 className='myFont inline mt-5 ' style={{fontSize:"50px",color:"rgb(235,235,235)"}}>OTURUM AÇ,</h5>
              
              <h5 className='myFont inline mt-2' style={{fontSize:"30px",color:"rgb(235,235,235)", opacity:"0.5"}}>ARAMIZA KATIL</h5>
              
            
          
        </div>
        <div style={{width:"100px",height:"100px"}}>
  
        </div>
        </div>)}</div> }
      
    </div>
  )
}
