import React from 'react';

function Footer() {
  return (
    <>
		<footer>
		<div className="container" id="contact">
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<h3 data-target="#collapse_1">Quick Links</h3>
					<div className="collapse dont-collapse-sm links" id="collapse_1">
						<ul>
							<li><a href="#">About us</a></li>
							<li><a href="#">What we Offer</a></li>
							<li><a href="#">Category</a></li>
							<li><a href="#">Features</a></li>
							
							<li><a href="#">Contacts</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<h3 data-target="#collapse_2">Categories</h3>
					<div className="collapse dont-collapse-sm links" id="collapse_2">
						<ul>
							<li><a href="#">Groceries</a></li>
							<li><a href="#">Meat Shop</a></li>
							<li><a href="#">Fruits &amp; Vegetables Shop</a></li>
							<li><a href="#">Restaurants</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
						<h3 data-target="#collapse_3">Contacts</h3>
					<div className="collapse dont-collapse-sm contacts" id="collapse_3">
						<ul>
							<li><i className="icon_house_alt"></i>New No.7, Old No.147, Mount Road, Little Mount, Saidapet, Chennai, Tamilnadu, Pin - 600015, India.</li>
							<li><i className="icon_mobile"></i>+91 99 401 799 97</li>
							<li><i className="icon_mail_alt"></i><a href="#0">marketing@spiderindia.com</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
						<h3 data-target="#collapse_4">Download Apps</h3>
					<div className="collapse dont-collapse-sm" id="collapse_4">
						
						<div className="follow_us">
						
							<ul>
								<li><a href="#0"><img src="images/google.png" alt="" className="lazy loading" data-was-processed="true"/></a></li>
								
							
							</ul>
						</div>
					</div>
				</div>
			</div>
		
			<hr/>
			
		</div>
	</footer>   </>
  );
}

export default Footer;
