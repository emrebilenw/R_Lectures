import React from 'react'

export default function Youtube() {

  const screenWidth=window.innerWidth
  return (
    <div >
      {screenWidth>1000?<div className='mt-4' style={{marginLeft:"120px",marginRight:"120px"}}>
        <div class="card mb-3">
        <img src="/images/yutupSS.png" class="card-img-top" alt="..."></img>
         <div class="card-body">
           <h5 class="card-title">Youtube kanalımı ziyaret et</h5>
           <p class="card-text">Kanalım, veri bilimi ve istatistik dünyasına temel seviye ve orta seviye R Studio 
           eğitimleri sunan bir kaynaktır. R Studio'nun temel kullanımından başlayarak veri analizi, programlama, ve 
           görselleştirmeye kadar geniş bir yelpazede konuları içermektedir. Videolarım adım adım öğrenme deneyimi 
           sunarak, R dilini etkili bir şekilde kullanmayı öğrenmenize yardımcı olacaktır. Temel seviyeden orta seviyeye 
           uzanan içeriklerimle veri dünyasında kendinizi güvenle ifade edebilmeniz için sizleri bekliyorum. Yeni 
           videolarımı kaçırmamak ve R Studio'da uzmanlaşmak için şimdi kanalıma abone olun, beğeninizi ve değerli 
           yorumlarınızı benimle paylaşın!📊📈💻</p>
           <a class="card-text" href='https://www.youtube.com/channel/UCbvL0EFrAhJyD-JLyojKCtA'><small class="text-muted">Youtube kanalımı görüntülemek için buraya tıkla!</small></a>
         </div>
       </div>

       <div class="embed-responsive embed-responsive-16by9 mt-5">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/mOCfV8fkZg8" allowfullscreen></iframe>
       </div>
       <div style={{width:"100px", height:"60px"}}>

       </div>
      </div>:
      
      
      <div className='mt-4 '>
        <div class="card mb-3">
        <img src="/images/yutupSS.png" class="card-img-top mt-2 pr-2 pl-2" alt="..."></img>
         <div class="card-body">
           <h5 class="card-title">Youtube kanalımı ziyaret et</h5>
           <p class="card-text">Kanalım, veri bilimi ve istatistik dünyasına temel seviye ve orta seviye R Studio 
           eğitimleri sunan bir kaynaktır. R Studio'nun temel kullanımından başlayarak veri analizi, programlama, ve 
           görselleştirmeye kadar geniş bir yelpazede konuları içermektedir. Videolarım adım adım öğrenme deneyimi 
           sunarak, R dilini etkili bir şekilde kullanmayı öğrenmenize yardımcı olacaktır. Temel seviyeden orta seviyeye 
           uzanan içeriklerimle veri dünyasında kendinizi güvenle ifade edebilmeniz için sizleri bekliyorum. Yeni 
           videolarımı kaçırmamak ve R Studio'da uzmanlaşmak için şimdi kanalıma abone olun, beğeninizi ve değerli 
           yorumlarınızı benimle paylaşın!📊📈💻</p>
           <a class="card-text" href='https://www.youtube.com/channel/UCbvL0EFrAhJyD-JLyojKCtA'><small class="text-muted">Youtube kanalımı görüntülemek için buraya tıkla!</small></a>
         </div>
       </div>

       <div class="embed-responsive embed-responsive-16by9 mt-5">
       <iframe class="embed-responsive-item pr-2 pl-2" src="https://www.youtube.com/embed/mOCfV8fkZg8" allowfullscreen></iframe> 
       </div>
       <div style={{width:"100px", height:"50px"}}>

       </div>
      </div>}
      
      
    </div>
  )
}
