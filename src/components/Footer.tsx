import { Phone, Mail, MapPin, Share2, Heart, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <h2 className="footer-logo">Dr. <span className="highlight">PET WELL</span></h2>
            <p className="footer-description">
              Animal Hospital & Pet Store. Pet's Best Friend.....<br />
              {/* Regd. UPVC6789 */}
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Share2 size={20} /></a>
              <a href="#" className="social-icon"><Heart size={20} /></a>
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#locations">Branches</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <Phone size={18} className="contact-icon" />
                <a href="tel:8874678678">8874678678</a>, <a href="tel:8795678678">8795678678</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:info@drpetwell.com">info@drpetwell.com</a>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>IIIT Road, Beside Gramin Bank, Jhalwa, Pipal Gaon, Prayagraj</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dr. Pet Well Animal Hospital & Pet Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
