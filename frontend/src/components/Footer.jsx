import React from 'react';

const Footer = () => {
    return ( 
        <div>
       <div>
  {/* Footer Start */}
  <div className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-widget">
            <h2>Get in Touch</h2>
            <div className="contact-info">
              <p><i className="fa fa-map-marker" />Tunisia , Monastir</p>
              <p><i className="fa fa-envelope" />lakhalouma6@gmail.com</p>
              <p><i className="fa fa-phone" />+216 24 540 686</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-widget">
            <h2>Follow Us</h2>
            <div className="contact-info">
              <div className="social">
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-linkedin-in" /></a>
                <a href><i className="fab fa-instagram" /></a>
                <a href><i className="fab fa-youtube" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-widget">
            <h2>Company Info</h2>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="#">Terms &amp; Condition</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-widget">
            <h2>Purchase Info</h2>
            <ul>
              <li><a href="#">Pyament Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Return Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row payment align-items-center">
        <div className="col-md-6">
          <div className="payment-method">
            <h2>We Accept:</h2>
            <img src="img/payment-method.png" alt="Payment Method" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="payment-security">
            <h2>Secured By:</h2>
            <img src="img/godaddy.svg" alt="Payment Security" />
            <img src="img/norton.svg" alt="Payment Security" />
            <img src="img/ssl.svg" alt="Payment Security" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Footer Bottom Start */}
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-6 copyright">
          <p>Copyright © Oumaima. All Rights Reserved</p>
        </div>
       
      </div>
    </div>
  </div>
  {/* Footer Bottom End */}
</div>

        </div>
     );
}
 
export default Footer;