import React, { Component, useEffect, useState } from 'react';

export class Hakkımda extends Component {
  render() {
    return (
      <HakkımdaWithScreenControl />
    );
  }
}

const HakkımdaWithScreenControl = () => {
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

  if (screenWidth < 1000) {
    return( <div style={{ width: "100%" }}>
    <div className='row'>
      <div className='col-1'></div>
      <div className="jumbotron mt-5 col-10 boxShadow2" style={{borderRadius:"15px"}}>
        <h1 className="display-4 myTextAbout4">Ben Kimim?</h1>
        <p className="lead myTextAbout3">
          Merhaba, ben Emre Bilen. Eğitim hayatımın bir kısmını Bolu'da tamamladıktan sonra üniversite okumak
          için İstanbul'a geldim. Kodlamaya olan ilgim, Marmara Üniversitesi'nde aldığım eğitimin bir parçası
          olan JavaFX platformu sayesinde güçlendi. Şu anda, üniversite hayatımdan ve kariyer
          gelişimimden elde ettiğim bilgileri paylaşarak insanlara katkıda bulunmak en büyük arzum.</p>
        <hr className="my-4" />
        <p>Kariyerim ile ilgili akademik bilgilere ulaşmak için tıklayınız.</p>
        <a className="btn myTextAbout5 text-white" target='_blank' href='https://firebasestorage.googleapis.com/v0/b/my-r-project-c6a30.appspot.com/o/Constant%2FEmre-Bilen-Resume.pdf?alt=media&token=f6a46d01-1a32-46cb-9626-7fae732e861f' style={{ borderRadius: "20px", backgroundColor: "#00488b" }}>CV Görüntüle</a>
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
  </div>); // Ekran genişliği 1000'den küçükse null döndür
  }

  return (
    <div style={{ width: "100%" }}>
      <div className='row'>
        <div className='col-1'></div>
        <div className="jumbotron mt-5 col-10 boxShadow2">
          <h1 className="display-4 myTextAbout4">Ben Kimim?</h1>
          <p className="lead myTextAbout3">
            Merhaba, ben Emre Bilen. Eğitim hayatımın bir kısmını Bolu'da tamamladıktan sonra üniversite okumak
            için İstanbul'a geldim. Kodlamaya olan ilgim, Marmara Üniversitesi'nde aldığım eğitimin bir parçası
            olan JavaFX platformu sayesinde güçlendi. Şu anda, üniversite hayatımdan ve kariyer
            gelişimimden elde ettiğim bilgileri paylaşarak insanlara katkıda bulunmak en büyük arzum.</p>
          <hr className="my-4" />
          <p>Kariyerim ile ilgili akademik bilgilere ulaşmak için tıklayınız.</p>
          <a className="btn myTextAbout5 text-white" target='_blank' href='https://firebasestorage.googleapis.com/v0/b/my-r-project-c6a30.appspot.com/o/Constant%2FEmre-Bilen-Resume.pdf?alt=media&token=a6dceb8e-9de3-499c-9ab8-6d4d2219d57d' style={{ borderRadius: "20px", backgroundColor: "#00488b" }}>CV Görüntüle</a>
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
  );
};

export default Hakkımda;