import { Clock, PhoneCall } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container grid-2">
        <div className="hero-content animate-fade-in">
          <div className="badge-24h">
            <Clock size={20} />
            <span>24 HOUR SERVICE</span>
          </div>
          <h1 className="hero-title">
            Dr. <span className="highlight">PET WELL</span>
          </h1>
          <h2 className="hero-subtitle">Animal Hospital & Pet Store</h2>
          <p className="hero-description">
            Providing compassionate, state-of-the-art care for your furry family members. 
            Because they are not just pets, they are your best friends.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="tel:8874678678" className="btn btn-outline">
              <PhoneCall size={18} /> Emergency Call
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in">
          {/* Using placeholder image for dogs and cats since we don't have the original asset */}
          <div className="placeholder-image">
             <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Happy Dog and Cat" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
