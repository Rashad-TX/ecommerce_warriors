import React, { Component } from "react";

class Contact extends Component{
    render(){

        return(<>
        <div className="address-container">
<h2 className="FAQ-hdr">FAQ</h2>

        </div>

<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        CONTACT INFORMATION
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Email:</strong> ShopGSWSupport@ShopGSW.com<br></br>
        <strong>Phone:</strong>(555)-555-SHOP<br></br>
        <strong>Address:</strong>123 Demo Blvd, San Fransico, CA<br></br>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       RETURN POLICY
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Return Policy.</strong> <br></br>Our return process is pretty simple. You can return your merchandise up to 365 days from your item's ship date.
If your order was shipped within the United States, you can initiate a return at any time by visiting our Returns Center.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       SHIPPING RATES
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Shipping Rates.</strong> Please note: Shipping prices are determined by the shipping location, the amount of items ordered, the shipping method selected at checkout, as well as the type of item(s) ordered. Orders shipping with these methods are delivered via UPS, FedEx, LaserShip, International Bridge, OnTrac, DHL and OSM. The majority of our orders ship from our shipping facilities located in Jacksonville, Florida, Las Vegas, Nevada and Frazeysburg, Ohio. However, some items may ship directly from our manufacturer.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
       HOURS
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Hours.</strong> <br></br>We are open Sunday - Saturday 10:00am - 10:00pm
    </div>
  </div>
</div>
</div>



        </>)
    }
}

export default Contact;