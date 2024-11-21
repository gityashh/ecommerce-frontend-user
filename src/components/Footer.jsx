import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Subscription Section */}
      <div className="newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <p>Stay updated with our latest news and offers.</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>

      <div className="footer-container">
        
        {/* Contact Us Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Demo Store</p>
          <p>No. 1259 Freedom, New York, 11111</p>
          <p>United States</p>
          <p>+91-987654321</p>
          <p>Demo@exampledemo.com</p>
          <div className="footer-icons">
            <a className="text-white fs-2" href="#">< FaFacebook /></a>
            <a className="text-white fs-2" href="#">< FaTwitter /></a>
            <a className="text-white fs-2" href="#">< FaPinterest /></a>
            <a className="text-white fs-2" href="#">< FaInstagram /></a>
          </div>
        </div>

        {/* Information Section */}
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="footer-section">
          <h4>Account</h4>
          <ul>
            <li><a href="#">Search</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Size Chart</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Smart Watches</a></li>
            <li><a href="#">Tablets</a></li>
          </ul>
        </div>

        {/* Our App Section */}
        <div className="footer-section">
          <h4>Our App</h4>
          <p>Download our App and get extra 15% Discount on your first Order..!</p>
          <div className="app-links">
            <a href="#"><img src="https://play.google/howplayworks/static/assets/social/share_google_play_logo.png" alt="Google Play" /></a>
            <a href="#"><img src="path-to-icon/app-store.png" alt="App Store" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2022, Digitic Powered by Shopify</p>
        <div className="payment-icons">
        </div>
      </div>
    </footer>
  );
};

export default Footer;