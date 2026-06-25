import { Award, HeartPulse, Stethoscope } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">About Our Hospital</h2>
          <p className="section-subtitle">Dedicated to providing the best healthcare and products for your pets under one roof.</p>
        </div>

        <div className="grid-2 align-center">
          <div className="about-image-wrapper">
             <img src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Veterinary Clinic" className="about-img" />
          </div>
          <div className="about-content">
            <h3>Meet Dr. S.P. Singh</h3>
            <p className="credentials">B.V.Sc & AH M.V. Sc (Vet. Physician & Surgeon)</p>
            <p className="about-text">
              With years of experience and a deep love for animals, Dr. S.P. Singh leads the team at Dr. Pet Well. 
              Our hospital is equipped with modern facilities to diagnose and treat a wide range of animal health issues.
            </p>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon"><Stethoscope size={24} /></div>
                <div>
                  <h4>Expert Veterinary Care</h4>
                  <p>Comprehensive health checkups and surgical procedures.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><HeartPulse size={24} /></div>
                <div>
                  <h4>Emergency Services</h4>
                  <p>We are available 24/7 for any pet emergencies.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Award size={24} /></div>
                <div>
                  <h4>Government Registered</h4>
                  <p>Regd. UPVC6789 ensuring certified and standard care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
