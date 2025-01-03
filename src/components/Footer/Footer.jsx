import React from "react";
import "./Footer.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkden from "../../assets/linkden.png";
import visa from '../../assets/visa.png';
import mastercard from "../../assets/mastercard.png";
import paytm from "../../assets/paytm.png";
import paypal from "../../assets/paypal.png";
import gpay from "../../assets/gpay.png";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>Vinayak Tours</h1>
          <p>Turning Your Travel Dreams into Unforgettable Memories</p>
          <div className="footer-social-icons">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={linkden} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li >About</li>
            <li >Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>Contact: 7895830315, 9319082652</li>
            <li>Email: vinayaktoursdevbhumi@gmail.com</li>
            <li>Office Address: SITAPUR BYPASS ROAD, Near Truck Union, Haridwar</li>
          </ul>
        </div>
      </div>
      <div className="payment-method">
  <h2>Payment Methods</h2>
  <div className="payment-icons">
    <img src={visa} alt="Visa" />
    <img src={mastercard} alt="MasterCard" />
    <img src={paytm} alt="Paytm" />
    <img src={paypal} alt="PayPal" />
    <img src={gpay} alt="gpay" />

  </div>
</div>

      <hr />
      <p className="footer-copyright">
        Copyright 2025 | Vinayak Tours - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
