import { Activity, Stethoscope, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon-wrapper">
            <Stethoscope className="logo-icon" size={32} />
            <Activity className="logo-pulse" size={24} />
          </div>
          <div className="logo-text">
            <h2>Dr. <span className="highlight">PET WELL</span></h2>
            <p>Pet's Best Friend.....</p>
          </div>
        </div>
        
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#locations">Branches</a></li>
        </ul>

        <div className="navbar-contact">
          <a href="tel:8874678678" className="btn btn-primary">
            <Phone size={18} /> Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
