import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
function Screens() {
  return (
    <>
		<div className="appscreen" id="Screens">
<div className="container margin_60_40">
			<div className="testi version_2">
<section className="text-center my-5 p-1">

<div className="col-12">
					<div className="main_title center version_2">
						<span><em></em></span>
						<h2>App Screens</h2>
						
					</div>
				</div>

 

  <div className="appscreen row">

<div className="col-md-3"></div>

    <div className="col-lg-6">

      <AliceCarousel autoPlay={true} autoPlayInterval={2000} dotsDisabled={false} buttonsDisabled={true}>
      <img src="./images/screens/1.png" className="sliderimg"/>
      <img src="./images/screens/2.png" className="sliderimg"/>
      <img src="./images/screens/3.png" className="sliderimg"/>
      <img src="./images/screens/4.png" className="sliderimg"/>
      <img src="./images/screens/5.png" className="sliderimg"/>
      <img src="./images/screens/6.png" className="sliderimg"/>
      <img src="./images/screens/7.png" className="sliderimg"/>
      <img src="./images/screens/8.png" className="sliderimg"/>
      <img src="./images/screens/9.png" className="sliderimg"/>

      <img src="./images/screens/10.png" className="sliderimg"/>
      <img src="./images/screens/11.png" className="sliderimg"/>
      <img src="./images/screens/12.png" className="sliderimg"/>
      <img src="./images/screens/13.png" className="sliderimg"/>
      <img src="./images/screens/14.png" className="sliderimg"/>
      <img src="./images/screens/15.png" className="sliderimg"/>
      <img src="./images/screens/16.png" className="sliderimg"/>
      <img src="./images/screens/17.png" className="sliderimg"/>
      <img src="./images/screens/18.png" className="sliderimg"/>
      <img src="./images/screens/19.png" className="sliderimg"/>
</AliceCarousel>
   
    </div>
<div className="col-md-3"></div>

  </div>


</section>


				</div>





			
			</div>
			
		</div>  





		</>
  );
}

export default Screens;
