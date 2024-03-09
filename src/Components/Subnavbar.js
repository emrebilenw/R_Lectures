import React, { Component } from 'react';

class Subnavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0 // Başlangıçta aktif olan butonun indeksi
    };
  }

  handleButtonClick = (index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className='container col-xl text-white pb-0 myText'>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link myNavFont ${activeIndex === 0 ? 'active' : ''}`}
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              style={{ borderRadius: "100px", backgroundColor: activeIndex === 0 ? "#00488b" : null }}
              id="pills-home-tab"
              data-toggle="pill"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              onClick={() => this.handleButtonClick(0)}
            >
              R Studio
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link myNavFont ${activeIndex === 1 ? 'active' : ''}`}
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
              style={{ borderRadius: "100px", backgroundColor: activeIndex === 1 ? "#00488b" : null }}
              id="pills-profile-tab"
              data-toggle="pill"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => this.handleButtonClick(1)}
            >
              YouTube
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link myNavFont ${activeIndex === 2 ? 'active' : ''}`}
              data-target="#carouselExampleIndicators"
              data-slide-to="2"
              style={{ borderRadius: "100px", backgroundColor: activeIndex === 2 ? "#00488b" : null }}
              id="pills-contact-tab"
              data-toggle="pill"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
              onClick={() => this.handleButtonClick(2)}
            >
              Yeni
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Subnavbar;