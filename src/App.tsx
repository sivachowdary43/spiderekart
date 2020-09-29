import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slide from './slide';
import AboutUs from './aboutUs';
import PopularCategory from './popularCategory';
import Features from './features';
import Pricing from './pricing';
import Screens from './screens';
import Testimonials from './testimonials';
import Footer from './footer'

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header header clearfix element_to_stick">
   
    <div className="container">
    <div id="logo">
      <a href="index.html">
        <img src="images/logo.svg"  alt="" className="logo_normal"/>
        <img src="images/logo_sticky.svg"  alt="" className="logo_sticky"/>
      </a>
    </div>
    <ul id="top_menu">
      <li><i className="fa fa-sign-in mt-3 font-20" aria-hidden="true"></i></li>
      
    </ul>
    <a href="#0" className="open_close">
      <i className="icon_menu"></i><span>Menu</span>
    </a>
    <nav className="main-menu">
      <div id="header_menu">
        <a href="#0" className="open_close">
          <i className="icon_close"></i><span>Menu</span>
        </a>
        <a href="index.html"><img src="img/logo.svg" width="140" height="35" alt=""/></a>
      </div>
      <ul>
        <li className="submenu">
          <a href="#0" className="show-submenu">Home</a>
        
        </li>
        <li className="submenu">
          <a href="#whatweoffer" className="show-submenu">About Us</a>
        
        </li>
    
        <li className="submenu">
          <a href="#features" className="show-submenu">Features</a>
          
        </li>

 <li className="submenu">
          <a href="#pricing" className="show-submenu">Pricing</a>
          
        </li>

      
       

        <li className="submenu">
          <a href="#features" className="show-submenu">Blog</a>
          
        </li>

        <li className="submenu">
          <a href="#features" className="show-submenu">FAQ</a>
          
        </li>

        <li className="submenu">
          <a href="#contact" className="show-submenu">Contact Us</a>
          
        </li>
        
      </ul>
    </nav>
  </div>

      </header>
      <div id="carousel-home">
      <div className="owl-carousel owl-theme">
        <div className="owl-slide cover" style={{backgroundImage: 'url(images/slides/banner1.jpg)'}}>
          <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
            <div className="container">
              <div className="row justify-content-center justify-content-md-end">
                <div className="col-lg-6 static">
                  <div className="slide-text text-right white">
                    <h2 className="owl-slide-animated owl-slide-title">Start Your Own Online
 </h2>
                    <p className="owl-slide-animated owl-slide-subtitle">
                      Grocery store
                    </p>
                    <div className="owl-slide-animated owl-slide-cta"><a className="btn_1" href="#" role="button">Create Your Store Now</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-slide cover" style={{backgroundImage: 'url(images/slides/banner2.jpg)'}}>
          <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.5)">
            <div className="container">
              <div className="row justify-content-center justify-content-md-start">
                <div className="col-lg-6 static">
                  <div className="slide-text white">
                    <h2 className="owl-slide-animated owl-slide-title">Start Your Own Online</h2>
                    <p className="owl-slide-animated owl-slide-subtitle">
                      Meat Shop
                    </p>
                    <div className="owl-slide-animated owl-slide-cta"><a className="btn_1" href="#" role="button">Create Your Store Now</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-slide cover" style={{backgroundImage: 'url(images/slides/banner3.jpg)'}}>
          <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.6)">
            <div className="container">
              <div className="row justify-content-center justify-content-md-start">
                <div className="col-lg-12 static">
                  <div className="slide-text text-center white">
                    <h2 className="owl-slide-animated owl-slide-title">Start your own 
<br/>online Grocery store</h2>
                    <p className="owl-slide-animated owl-slide-subtitle">
                      The best restaurants at the best price
                    </p>
                    <div className="owl-slide-animated owl-slide-cta"><a className="btn_1" href="#" role="button">Create Your Store Now</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="owl-slide cover" style={{backgroundImage: 'url(images/slides/banner4.jpg)'}}>
          <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.6)">
            <div className="container">
              <div className="row justify-content-center justify-content-md-start">
                <div className="col-lg-12 static">
                  <div className="slide-text text-center white">
                    <h2 className="owl-slide-animated owl-slide-title">Enjoy<br/>a friends dinner</h2>
                    <p className="owl-slide-animated owl-slide-subtitle">
                      The best restaurants at the best price
                    </p>
                    <div className="owl-slide-animated owl-slide-cta"><a className="btn_1" href="#" role="button">Create Your Store Now</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="icon_drag_mobile"></div>
    </div>
    <Slide/>
    <AboutUs/>
    <PopularCategory/>
    <Features/>
    <Pricing/>
      <Screens/>
    <Testimonials/>
    <Footer/>

    </div>
    </>
  );
}

export default App;
