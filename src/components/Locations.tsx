import { MapPin, Clock } from 'lucide-react';
import './Locations.css';

const branches = [
  {
    name: 'Main Branch (Prayagraj)',
    address: 'IIIT Road, Beside Gramin Bank (UP Bank of Baroda) Jhalwa, Pipal Gaon, Prayagraj',
    timings: '10:00 am to 1:00 pm, 05:00 pm to 8:00 pm',
    sundayTiming: '10:00 am to 01:00 pm',
    isMain: true
  },
  {
    name: 'City Center Branch',
    address: 'Civil Lines, Near Medical College, Prayagraj',
    timings: '09:00 am to 2:00 pm, 04:00 pm to 9:00 pm',
    sundayTiming: 'Closed',
    isMain: false
  }
];

const Locations = () => {
  return (
    <section id="locations" className="section-padding bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Branches</h2>
          <p className="section-subtitle">Visit us at our convenient locations across the city.</p>
        </div>

        <div className="grid-2">
          {branches.map((branch, index) => (
            <div key={index} className={`location-card ${branch.isMain ? 'main-branch' : ''}`}>
              {branch.isMain && <div className="branch-badge">Head Office</div>}
              <h3 className="branch-name">{branch.name}</h3>
              
              <div className="branch-details">
                <div className="detail-item">
                  <MapPin className="detail-icon" size={20} />
                  <p>{branch.address}</p>
                </div>
                <div className="detail-item">
                  <Clock className="detail-icon" size={20} />
                  <div>
                    <p><strong>Mon - Sat:</strong> {branch.timings}</p>
                    <p><strong>Sunday:</strong> {branch.sundayTiming}</p>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-primary mt-4">Get Directions</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
