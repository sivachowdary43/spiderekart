import React from 'react';

function Pricing() {
  return (
    <>
	
	
	<div className="pricing" id="pricing">
<div className="container margin_60_40">
			<div className="row">
				<div className="col-12">
					<div className="main_title center version_2">
						<span><em></em></span>
						<h2>Pricing</h2>
						
						
					</div>
				</div>

		

    <div className="container">

      <div className="list-group list-group-horizontal pricing-plans-tab" role="tablist">
        <a className="list-group-item list-group-item-action active" id="monthly-tab" data-toggle="list" href="#monthly" role="tab" aria-controls="monthly" aria-selected="true">Monthly</a>
        <a className="list-group-item list-group-item-action" id="yearly-tab" data-toggle="list" href="#yearly" role="tab" aria-controls="yearly" aria-selected="false">Yearly</a>
      </div>
      <div className="tab-content pricing-tab-content" id="pills-tabContent">
        <div className="tab-pane show active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
          <div className="row no-gutters justify-content-lg-center">
            <div className="col-md-4 col-lg-3">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="pricing-plan-title">Basic Plan</h5>
                  <h3 className="pricing-plan-cost"><span className="currency">$</span>9.9</h3>
                  <ul className="pricing-plan-features">
                    <li>Interface design</li>
                    <li>SEO Optimisation</li>
                    <li>10 Domains</li>
                    <li>Website Design</li>
                  </ul>
                  <a href="#!" className="btn pricing-plan-purchase-btn">Purchase now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="card pricing-card pricing-card-highlighted">
                <div className="card-body">
                  <h5 className="pricing-plan-title">Premium Plan</h5>
                  <h3 className="pricing-plan-cost"><span className="currency">$</span>49.9</h3>
                  <ul className="pricing-plan-features">
                    <li>Interface design</li>
                    <li>Finance Analysing</li>
                    <li>25 Domains</li>
                    <li>2GB Bandwidth</li>
                  </ul>
                  <a href="#!" className="btn pricing-plan-purchase-btn">Purchase now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="pricing-plan-title">Pro Plan</h5>
                  <h3 className="pricing-plan-cost"><span className="currency">$</span>99.9</h3>
                  <ul className="pricing-plan-features">
                    <li>Interface design</li>
                    <li>SEO Optimisation</li>
                    <li>50 Domains</li>
                    <li>ads marketing</li>
                  </ul>
                  <a href="#!" className="btn pricing-plan-purchase-btn">Purchase now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
          <div className="row no-gutters justify-content-lg-center">
            <div className="col-md-4 col-lg-3">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="pricing-plan-title">Basic Plan</h5>
                  <h3 className="pricing-plan-cost"><span className="currency">$</span>99.9</h3>
                  <ul className="pricing-plan-features">
                    <li>Interface design</li>
                    <li>SEO Optimisation</li>
                    <li>10 Domains</li>
                    <li>Website Design</li>
                  </ul>
                  <a href="#!" className="btn pricing-plan-purchase-btn">Purchase now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="card pricing-card pricing-card-highlighted">
                <div className="card-body">
                  <h5 className="pricing-plan-title">Premium Plan</h5>
                  <h3 className="pricing-plan-cost"><span className="currency">$</span>499.9</h3>
                  <ul className="pricing-plan-features">
                    <li>Interface design</li>
                    <li>Finance Analysing</li>
                    <li>25 Domains</li>
                    <li>2GB Bandwidth</li>
                  </ul>
                  <a href="#!" className="btn pricing-plan-purchase-btn">Purchase now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="pricing-plan-title">Pro Plan</h5>
                  <h3 className="pricing-plan-cost"><span className="currency">$</span>999.9</h3>
                  <ul className="pricing-plan-features">
                    <li>Interface design</li>
                    <li>SEO Optimisation</li>
                    <li>50 Domains</li>
                    <li>ads marketing</li>
                  </ul>
                  <a href="#!" className="btn pricing-plan-purchase-btn">Purchase now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


				
				
			</div>



		
				
			</div>
		
			<p className="text-center d-block d-md-block d-lg-none"><a href="grid-listing-filterscol.html" className="btn_1">View All</a></p>
			


</div>

	</>
  );
}

export default Pricing;
