import { Syringe, Stethoscope, Scissors, ShoppingBag, Pill, Bone } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Stethoscope size={32} />,
    title: 'General Checkups',
    description: 'Routine wellness exams to ensure your pets stay healthy and happy.'
  },
  {
    icon: <Syringe size={32} />,
    title: 'Vaccinations',
    description: 'Protect your furry friends with our comprehensive vaccination programs.'
  },
  {
    icon: <Scissors size={32} />,
    title: 'Surgery',
    description: 'Safe and professional surgical procedures by Dr. S.P. Singh.'
  },
  {
    icon: <ShoppingBag size={32} />,
    title: 'Pet Store',
    description: 'Premium quality food, accessories, and toys for all kinds of pets.'
  },
  {
    icon: <Pill size={32} />,
    title: 'Pharmacy',
    description: 'In-house pharmacy stocked with essential veterinary medicines.'
  },
  {
    icon: <Bone size={32} />,
    title: 'Diet & Nutrition',
    description: 'Expert advice on pet diets to keep them active and fit.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-light">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive care and supplies for your beloved pets.</p>
        </div>

        <div className="grid-3">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
