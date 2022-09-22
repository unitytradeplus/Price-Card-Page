import * as React from "react";
import "./pricecard.css";
// import companyLogo from "https://s21.postimg.cc/tpm0cge4n/space-ship.png";

/* <div class="background">
    <div class="container">
      <div class="panel pricing-table">
        
  
        
        
        <div class="pricing-plan">
          <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img">
          <h2 class="pricing-header">Enterprise</h2>
          <ul class="pricing-features">
            <li class="pricing-features-item">Dedicated</li>
            <li class="pricing-features-item">Simple horizontal scalability</li>
          </ul>
          <span class="pricing-price">$400</span>
          <a href="#/" class="pricing-button">Free trial</a>
        </div>
        
        
        
      </div>
    </div>
  </div> */

export function Cards(props) {
  return (
    <div class="pricing-plan">
      {/* <img src={companyLogo} alt="BigCo Inc. logo" class="pricing-img" /> */}
      <h2 class="pricing-header">{props.category}</h2>
      <ul class="pricing-features">
        <li class="pricing-features-item">{props.content_01}</li>
        <li class="pricing-features-item">{props.content_02}</li>
        <li class="pricing-features-item">{props.content_03}</li>
      </ul>
      <div>
        <span class="pricing-price">{props.price}</span>
        <span>/month</span>
      </div>

      <a href="https://itum.mrt.ac.lk/" class="pricing-button">
        {props.clickButton}
      </a>
    </div>
  );
}

function Container() {
  return (
    <div class="background">
      <div class="container">
        <div class="panel pricing-table">
          <Cards
            category={"Free"}
            content_01={"Tecnical Analysis"}
            content_02={"Fundemental Analysis"}
            content_03={"Telegram Signals"}
            price={"$0"}
            clickButton={"Get Plan"}
          />
          <Cards
            category={"Six Month"}
            content_01={"Tecnical Analysis"}
            content_02={"Fundemental Analysis"}
            content_03={"Telegram Signals"}
            price={"$10"}
            clickButton={"Get Plan"}
          />
          <Cards
            category={"Annual Pro"}
            content_01={"Tecnical Analysis"}
            content_02={"Fundemental Analysis"}
            content_03={"Telegram Signals"}
            price={"$20"}
            clickButton={"Get Plan"}
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
