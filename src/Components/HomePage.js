import React, { Component } from 'react'
import ButtonSmall from './ButtonSmall'
import HomeBox from './HomeBox'
import { Link } from 'react-router-dom';
import "animate.css"
export class HomePage extends Component {


;


  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ screenWidth: window.innerWidth });
  };


 
  
  render() {
   

    const { screenWidth } = this.state;
      
    return (
      
      <div>
        {screenWidth>1000?<div>
        <div className='ml-4 mt-5 container'>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-11'>
            <h5 className='myFont inline ' style={{fontSize:"100px",color:"rgb(235,235,235)"}}>İSTATİSTİK VE</h5>
            <h5 className='myFont inline' style={{fontSize:"100px",color:"rgb(235,235,235)"}}>PROGRAMLAMA</h5>
            <h5 className='myFont inline' style={{fontSize:"50px",color:"rgb(235,235,235)", opacity:"0.5"}}>ÖĞRENMEK İSTİYORSAN,</h5>
          </div>   
        </div>
          </div>
      
          <div className='ml-4 container mt-2'>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-6'>
            <div className='mt-4'>
              <Link to="/Tools">
              <ButtonSmall text="Araçları kullanmaya başla! 📊📈💻">
              </ButtonSmall>
              </Link>
            </div>
          </div>   
        </div>
          </div>

          

          <div className='ml-4 container mt-1'>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-11'>
            <HomeBox>

            </HomeBox>
          </div>   
        </div>
          </div>
          <hr style={{marginTop:"30px"}} />
          <div className='mt-4' style={{marginLeft:"120px",marginRight:"120px"}}>
            <img src='/images/RStudio-Ball.png' className='mr-3 ' style={{width:"300px", borderRadius:"10px"}}></img>
            <h5 className=' myFont d-inline-block ml-5' style={{fontSize:"70px",color:"rgb(235,235,235)"}}>R ve R Studio</h5>
            <h5 className=' myFont d-inline-block ml-3' style={{fontSize:"70px",color:"rgb(235,235,235)", opacity:"0.5"}}>nedir?</h5>
            
            
          <div className="mt-3 boxShadow2 pt-0"style={{borderRadius:"15px", backgroundColor:"#F6F6F6"}} >
            <div className='row'>
              <div className='col-6 mt-5'>
               <p className="lead myTextAbout3 ml-5 mt-4 ">&nbsp;R, bir istatistiksel programlama dili ve çevresel bir yazılım ortamıdır. İstatistik analiz, veri manipülasyonu, grafik çizimi ve raporlama gibi istatistiksel ve veri analizi görevleri için özel olarak tasarlanmıştır. R, özgür bir yazılım olup, açık kaynak kodlu bir proje olan R Projesi tarafından geliştirilmektedir. R, veri bilimcileri, istatistikçiler, araştırmacılar ve diğer veri analitiği alanlarında çalışan profesyoneller tarafından geniş bir şekilde kullanılmaktadır. R, zengin bir paket ekosistemine sahiptir, yani kullanıcılar tarafından geliştirilen ve paylaşılan birçok paket ve kütüphane içerir. Bu paketler, çeşitli analiz ve görselleştirme görevleri için kullanılabilir.</p>
               <p className="lead myTextAbout3 ml-5 mt-5">&nbsp;R Studio ise R dilini daha etkili bir şekilde kullanmanızı sağlayan entegre bir geliştirme ortamıdır. R Studio, R dilinde kod yazmayı, çalıştırmayı, görselleştirmeyi ve raporlama yapmayı kolaylaştıran bir arayüze sahiptir. Ayrıca, R projelerini düzenlemenizi, paketleri yönetmenizi ve çalışma ortamınızı daha düzenli bir şekilde yönetmenizi sağlayan bir dizi araç sunar. R Studio'nun arayüzü, script yazma, çalıştırma ve sonuçları gözlemleme, veri manipülasyonu ve görselleştirme için bir dizi pencere içerir. R Studio, R dilinde çalışan projeleri daha etkili bir şekilde yönetmek ve geliştirmek için bir dizi özellik sunar. R ve R Studio, veri analizi ve istatistik alanında kullanıcıların işlerini kolaylaştıran güçlü ve popüler araçlardır.</p>
              </div>
              <div className='col-6' style={{height:"900px"}}><img style={{width:"600px", position:"relative"}} src="/images/AI_1.webp" /><img style={{width:"500px", marginLeft:"50px",marginTop:"400px",position:"absolute",top:"0",left:"0"}} src="/images/AI_7.png" /></div>
              
            </div>
        

            
  
          </div>
        

           
          </div>
          <hr style={{marginTop:"30px"}} />
          <div className='mt-4' style={{marginLeft:"120px",marginRight:"120px"}}>
            <div class="row">
              <div class="col-sm-6">
                <div class="">
                  <div class="card-body">
                    <h5 class="card-title ml-2 myTextAbout4" style={{fontSize:"30px"}}>Benimle çalışmak ister misin? 🤝</h5>
                    <p class="card-text myTextAbout123"> &nbsp; Merhaba! Ben Emre, bu platformda sizinle çalışmaktan ve size değerli
                     bir deneyim sunmaktan heyecan duyuyorum. İster bir web sitesi tasarlayalım, ister bir 
                     eğitim geliştirelim, işbirliği için hazırım. Sizi daha iyi tanımak ve projelerinizde size 
                     nasıl yardımcı olabileceğimi öğrenmek için bekliyorum. Birlikte harika şeyler başarabiliriz!</p>
                     <Link to="/Contact">
                      <button className="btn myTextAbout3 text-white" style={{borderRadius:"20px",backgroundColor:"#00488b" }}>
                      İletişim
                      </button>
                     </Link>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="">
                  <div class="card-body">
                  
                    <h5 class="card-title ml-2 myTextAbout4" style={{fontSize:"30px"}}>Görüşlerin benim için çok değeri. ✍️</h5>
                    <p class="card-text myTextAbout123"> &nbsp; Sitemi ziyaret ettiğiniz için teşekkür ederim! Sizinle etkileşimde
                     bulunmak ve web sitem hakkındaki düşüncelerinizi öğrenmek benim için önemlidir. Her türlü 
                     geri bildirim, öneri veya sorularınızı bekliyorum.</p>
                     <Link to="/Contact">
                      <button className="btn myTextAbout3 text-white" style={{borderRadius:"20px",backgroundColor:"#00488b" }}>
                      İletişim
                      </button>
                     </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{width:"100px",height:"100px"}}></div></div>:
          
          
          <div className=''>
        
        
          
          <div className='mt-4 ml-4 '>
            <h5 className='myFont inline ' style={{fontSize:"40px",color:"rgb(235,235,235)"}}>İSTATİSTİK VE </h5>
            <h5 className='myFont inline' style={{fontSize:"40px",color:"rgb(235,235,235)"}}>PROGRAMLAMA</h5>
            <h5 className='myFont inline mt-2' style={{fontSize:"15px",color:"rgb(235,235,235)", opacity:"0.5"}}>ÖĞRENMEK İSTİYORSAN,</h5>
          </div>   
          <h1 class="animate__animated animate__bounce">An animated element</h1>
       
          
      
          <div className=' container pl-0 mt-5 ml-4'>
            <div className=' mr-1 '>
              
              
                <div className='mt-4'>
                  <Link to="/Tools">
                  <ButtonSmall forPhone={true} text="Araçları kullanmaya başla! 📊📈">
                  </ButtonSmall>
                  </Link>
                </div>
                
            </div>
          </div>

          

         
          <hr style={{marginTop:"30px"}} />
         
            <img src='/images/RStudio-Ball.png' className='ml-4 mb-4'  style={{width:"100px", borderRadius:"10px"}}></img>
            <div className=' d-inline-block'>
            <h5 className=' myFont d-inline-block ml-4 ' style={{fontSize:"20px",color:"rgb(235,235,235)"}}>R ve R Studio</h5>
            <h5 className=' myFont d-inline-block ml-2' style={{fontSize:"20px",color:"rgb(235,235,235)", opacity:"0.5"}}>nedir?</h5>
            </div>
            
          <div className="ml-0 boxShadow2 pt-0"style={{borderRadius:"15px", backgroundColor:"#F6F6F6"}} >
            
             
               <p className="lead myTextAbout3 ml-4 pt-4 pr-3">&nbsp;R, bir istatistiksel programlama dili ve çevresel bir yazılım ortamıdır. İstatistik analiz, veri manipülasyonu, grafik çizimi ve raporlama gibi istatistiksel ve veri analizi görevleri için özel olarak tasarlanmıştır. R, özgür bir yazılım olup, açık kaynak kodlu bir proje olan R Projesi tarafından geliştirilmektedir. R, veri bilimcileri, istatistikçiler, araştırmacılar ve diğer veri analitiği alanlarında çalışan profesyoneller tarafından geniş bir şekilde kullanılmaktadır. R, zengin bir paket ekosistemine sahiptir, yani kullanıcılar tarafından geliştirilen ve paylaşılan birçok paket ve kütüphane içerir. Bu paketler, çeşitli analiz ve görselleştirme görevleri için kullanılabilir.</p>
               <img style={{width:"350px", position:"relative"}} src="/images/AI_1.webp" />
               <p className="lead myTextAbout3 ml-4 pb-3 pr-3">&nbsp;R Studio ise R dilini daha etkili bir şekilde kullanmanızı sağlayan entegre bir geliştirme ortamıdır. R Studio, R dilinde kod yazmayı, çalıştırmayı, görselleştirmeyi ve raporlama yapmayı kolaylaştıran bir arayüze sahiptir. Ayrıca, R projelerini düzenlemenizi, paketleri yönetmenizi ve çalışma ortamınızı daha düzenli bir şekilde yönetmenizi sağlayan bir dizi araç sunar. R Studio'nun arayüzü, script yazma, çalıştırma ve sonuçları gözlemleme, veri manipülasyonu ve görselleştirme için bir dizi pencere içerir. R Studio, R dilinde çalışan projeleri daha etkili bir şekilde yönetmek ve geliştirmek için bir dizi özellik sunar. R ve R Studio, veri analizi ve istatistik alanında kullanıcıların işlerini kolaylaştıran güçlü ve popüler araçlardır.</p>
             
             
              
            
        

            
  
          </div>
        

           
          
          <hr style={{marginTop:"30px"}} />
          
            <div class="row">
              <div class="col-sm-6">
                <div class="">
                  <div class="card-body">
                    <h5 class="card-title ml-2 myTextAbout4" style={{fontSize:"30px"}}>Benimle çalışmak ister misin? 🤝</h5>
                    <p class="card-text myTextAbout123"> &nbsp; Merhaba! Ben Emre, bu platformda sizinle çalışmaktan ve size değerli
                     bir deneyim sunmaktan heyecan duyuyorum. İster bir web sitesi tasarlayalım, ister bir 
                     eğitim geliştirelim, işbirliği için hazırım. Sizi daha iyi tanımak ve projelerinizde size 
                     nasıl yardımcı olabileceğimi öğrenmek için bekliyorum. Birlikte harika şeyler başarabiliriz!</p>
                     <Link to="/Contact">
                      <button className="btn myTextAbout3 text-white" style={{borderRadius:"20px",backgroundColor:"#00488b" }}>
                      İletişim
                      </button>
                     </Link>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="">
                  <div class="card-body">
                    <h5 class="card-title ml-2 myTextAbout4" style={{fontSize:"30px"}}>Görüşlerin benim için çok değeri. ✍️</h5>
                    <p class="card-text myTextAbout123"> &nbsp; Sitemi ziyaret ettiğiniz için teşekkür ederim! Sizinle etkileşimde
                     bulunmak ve web sitem hakkındaki düşüncelerinizi öğrenmek benim için önemlidir. Her türlü 
                     geri bildirim, öneri veya sorularınızı bekliyorum.</p>
                     <Link to="/Contact">
                      <button className="btn myTextAbout3 text-white" style={{borderRadius:"20px",backgroundColor:"#00488b" }}>
                      İletişim
                      </button>
                     </Link>
                  </div>
                </div>
              </div>
            </div>
          
          
          <div style={{width:"100px",height:"100px"}}></div></div>}
        
      </div>
    )
  }
}

export default HomePage
