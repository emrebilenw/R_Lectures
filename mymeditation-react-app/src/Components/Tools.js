import React, { Component } from 'react'
import ToolCard from './ToolCard';
 class Tools extends Component {
  
  
  render() {
    return (
      <div className='row mt-4 '>
        <div className='col-1'></div>
      <div className='col-10 mt-5'>

        <div className='row'>
          <div className='col-6'>
            <ToolCard auth={this.props.auth} src="\Images\indir.jpg" text="R Studio'da frekanslar hakkında her şeyi öğrenebileceğin bir R Studio dosyası. " title="Frekans ve Tabloları">
            </ToolCard>
            <ToolCard auth={this.props.auth} src="/Images/rmarkdown (1).png" text="R MarkDown kullanarak dinamik grafik analizi yapmanı sağlaycak bir fonksiyon içeren R Markdown dosyası." title="Dinamik Grafik Analizi Fonksiyonu">
            </ToolCard>
            <ToolCard auth={this.props.auth} src="/Images/indir.jpg" title="R studio'da Poisson Dağlımı" text="Poisson dağılımı nedir? Nerde kullanılmalıdır. Poisson için bir fonksiyon yapalım ve örnekler üzerinde işlem yapalım!">
            </ToolCard>
          </div>
          <div className='col-6'>
            <ToolCard auth={this.props.auth} src="/Images/indir.jpg" title="R Studio Başlangıç" text="Yeni başlayanlar için eğitici ve detaylı anlatım içeren R Studio dosyası">
            </ToolCard>
            <ToolCard auth={this.props.auth} src="/Images/indir.jpg" title="R studio'da Bayes' Theorem'i öğren" text="Koşullu olasılığın R dilinde örneklerini içeren öğretici dosyayı buradan indirebilirsin.">
            </ToolCard>
            <ToolCard auth={this.props.auth} src="/Images/indir.jpg" title="R Studio'da Hyper Distribution" text="R Studio da Hyper Distribution için bir fonksiyon oluşturalım. Oluşturduğumuz fonksiyonu çeşitli örnekler üzerinde kullanalım">
            </ToolCard>
          </div>
        </div>

        <div className='col-1'>
        </div>

      </div>
      </div>
    )
  }
}
export default Tools;
