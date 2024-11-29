import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { GiTruck } from 'react-icons/gi';
import { IoLogoYoutube } from 'react-icons/io';
import { IoStar } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <span className="footer-icon"><IoStar /></span>
          <div className="footer-text">
            <h3>About Us</h3>
            <p>20+ Years Of Experience</p>
          </div>
        </div>
        <div className="footer-section">
          <span className="footer-icon"><GiTruck /></span>
          <div className="footer-text">
            <h3>Shipping Policy</h3>
            <p>Free delivery for orders over ₹ 5,000</p>
          </div>
        </div>
        <div className="footer-section">
          <span className="footer-icon"><FiPhoneCall /></span>
          <div className="footer-text">
            <h3>24/7 Customer Support</h3>
            <p>+91 8886 331 331</p>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <img src="/Images/trail.jpg" alt="Diamond Medicare Logo" className="footer-logo" />
        <div className="footer-office">
          <h4>Head Office</h4>
          <p>Sadhana Enlight, D.No: 23-1-14/1, Flat No:202, Narra Vari Street, Satyanarayanapuram, Vijayawada</p>
          <p>AP, INDIA – 520 011</p>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><strong>Phone:</strong> 0866 - 243 7671</p>
          <p><strong>Fax:</strong> 0866 - 243 7672</p>
          <p><strong>E-mail:</strong> diamondmedicare@gmail.com<br />diamondmedicare@yahoo.co.in</p>
          <p><strong>Customer Care Admin:</strong> +91 8886 331 331</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-company">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Company</a></li>
            <li><a href="/management">Our Management</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/shipping">Shipping Policy</a></li>
            <li><a href="/returns">Return Policy</a></li>
            <li><a href="/contactus">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m8!1m3!1d1914.67330332417!2d80.60872210303825!3d16.305224797823378!3m2!1i1024!2i768!4f13.1!4m5!3e0!4m1!2sKhazipet%20Donka%20Rd%2C%20Andhra%20Pradesh%20522307!4m1!2sKhazipet%20Donka%20Rd%2C%20Andhra%20Pradesh%20522307!5e0!3m2!1sen!2sin!4v1722505923554!5m2!1sen!2sin"
            width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com"><FaSquareFacebook /></a>
          <a href="https://www.instagram.com"><FaInstagramSquare /></a>
          <a href="https://www.youtube.com"><IoLogoYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
