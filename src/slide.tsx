import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
function Slide() {
  return (
    <>
  
<div className="sliders">

<AliceCarousel autoPlay={true} autoPlayInterval={4000} dotsDisabled={false} buttonsDisabled={true}>

  <div className="itamname">
      <img src="./images/slides/banner1.jpg" className="sliderimg"/>

 <div className="Caption1">
      <h3>Start your own online Grocery store</h3>
      <a href="#" className="btnname">Create Your Store Now</a>
    
    </div>
  </div>
  <div className="itamname">
      <img src="./images/slides/banner2.jpg" className="sliderimg"/>
      <div className="Caption2">
      <h3>Start your Meat Shop</h3>
      <a href="#" className="btnname">Create Your Store Now</a>
    
    </div>
  </div>
    <div className="itamname">
      <img src="./images/slides/banner3.jpg" className="sliderimg"/>
        <div className="Caption3">
      <h3>Start your Own Business</h3>
      <a href="#" className="btnname">Create Your Store Now</a>
    
    </div>
  </div>
   <div className="itamname">
      <img src="./images/slides/banner4.jpg" className="sliderimg"/>
        <div className="Caption4">
      <h3>Start your Own Shop</h3>
      <a href="#" className="btnname">Create Your Store Now</a>
    
    </div>
  </div>
</AliceCarousel>
  
</div>


    </>
  );
}

export default Slide;
