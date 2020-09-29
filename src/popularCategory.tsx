import React from 'react';

function PopularCategory() {
  return (
    <>
	
	<div className="container margin_60_40" id="category">
			<div className="main_title center">
				<span><em></em></span>
				<h2>Category</h2>
			
				
			</div>

		
			<div className="row owl-stage-outer">
			<div className="col-md-3 owl-stage">
			<div className="item">
			        <div className="strip">
			            <figure>
			              
			                <img src="images/location_1.jpg" data-src="images/location_1.jpg" className="owl-lazy" alt="" style={{opacity: '1'}}/>
			                <a href="detail-restaurant.html" className="strip_info">
			                   
			                    <div className="item_title">
			                        <h3>Groceries</h3>
			                       
			                    </div>
			                </a>
			            </figure>
			            
			        </div>
					</div>
					</div>
			 
		
			    <div className="col-md-3 owl-item active">
				<div className="item">
			        <div className="strip">
			            <figure>
			                
			                <img src="images/location_2.jpg" data-src="images/location_2.jpg" className="owl-lazy" alt="" style={{opacity: '1'}}/>
			                <a href="detail-restaurant.html" className="strip_info">
			                   
			                    <div className="item_title">
			                        <h3>Meat Shop</h3>
			                       
			                    </div>
			                </a>
			            </figure>
			           </div>
			        </div>
					</div>
			 
			    <div className="col-md-3 owl-item active">
				<div className="item">
			        <div className="strip">
			            <figure>
			              
			                <img src="images/location_3.jpg" data-src="images/location_3.jpg" className="owl-lazy" alt="" style={{opacity:'1'}}/>
			                <a href="detail-restaurant.html" className="strip_info">
			                   
			                    <div className="item_title">
			                        <h3>Fruits &amp; Vegetables Shop</h3>
			                       
			                    </div>
			                </a>
			            </figure>
			          
			        </div>
		</div>
		</div>
			    <div className="col-md-3 owl-item active">
				<div className="item">
			        <div className="strip">
			            <figure>
			               
			                <img src="images/location_4.jpg" data-src="images/location_4.jpg" className="owl-lazy" alt="" style={{opacity: '1'}}/>
			                <a href="detail-restaurant.html" className="strip_info">
			                   
			                    <div className="item_title">
			                        <h3>Restaurants</h3>
			                      
			                    </div>
			                </a>
			            </figure>
			           
			        </div>
			    </div></div>
				</div>
				</div>
		
		


	</>
  );
}

export default PopularCategory;
