import React, { Component } from 'react'
import { saveAs } from 'file-saver';

export class Hakkımda extends Component {

 
  
    handleDownload = () => {
    const filePath="/Emre_Bilen_Resume.pdf"
    saveAs(filePath,"Emre_Bilen_Resume")
    }

  render() {
    
    return (
      <div style={{width:"100%"}}>
         
<div className='row'>
  <div className='col-1'></div>
          <div className="jumbotron mt-5 col-10 boxShadow2" >
           <h1 className="display-4 myTextAbout4">Ben Kimim?</h1>
            <p className="lead myTextAbout3">
            Merhaba, ben Emre Bilen. Eğitim hayatımın bir kısmını Bolu'da tamamladıktan sonra üniversite okumak
            için İstanbul'a geldim. Kodlamaya olan ilgim, Marmara Üniversitesi'nde aldığım eğitimin bir parçası 
            olan JavaFX platformu sayesinde güçlendi. Şu anda, üniversite hayatımdan ve kariyer 
            gelişimimden elde ettiğim bilgileri paylaşarak insanlara katkıda bulunmak en büyük arzum.</p>
              <hr className="my-4"/>
            <p>Kariyerim ile ilgili akademik bilgilere ulaşmak için tıklayınız.</p>
            <button className="btn myTextAbout5 text-white" onClick={this.handleDownload} style={{borderRadius:"20px",backgroundColor:"#00488b" }}>İndir</button>
        </div>
        </div>
                    <div className='row'> 
                      <div className='col-1'></div>
                      <ul className="list-unstyled ml-0 pl-0 col-10">
                <li className="media ml-1">
                <i className="fa-brands fa-youtube fa-2x"></i>
                  <div className="media-body">
                    <h5 className="mt-0 mb-1 ml-2 myTextAbout2">YouTube</h5>
                    <p className='ml-2 myTextAbout'>Eğitim programımın önemli videolarına youtube kanalımdan ulaşabilirsiniz!</p>
                  </div>
                </li>
                <li className="media my-4 ml-1">
                <i className="fa-brands fa-tiktok fa-2x"></i>
                  <div className="media-body">
                    <h5 className="mt-0 mb-1 ml-3 myTextAbout2">TikTok</h5>
                    <p className='ml-3 myTextAbout'> Tiktok hesabımı da takip ederek öğrenmeye devam edebilirsiniz. </p>
                  </div>
                </li>
                <li className="media ml-1">
                <i className="fa-brands fa-instagram fa-2x"></i>
                  <div className="media-body">
                    <h5 className="mt-0 mb-1 ml-3 myTextAbout2">Instragram</h5>
                    <p className='ml-3 myTextAbout'>emrebilen.w</p>
                  </div>
                </li>
              </ul>
           </div>
      </div>
    )
  }
}

export default Hakkımda
