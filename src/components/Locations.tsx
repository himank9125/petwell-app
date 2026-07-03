import { MapPin, Clock } from 'lucide-react';
import './Locations.css';

const branches = [
  {
    name: 'Main Branch (Prayagraj)',
    address: 'IIIT Road, Beside Gramin Bank (UP Bank of Baroda) Jhalwa, Pipal Gaon, Prayagraj, Uttar Pradesh',
    timings: '09:00 am to 09:00 pm',
    emergency: '09:00 pm to 09:00 am',
    isMain: true
  },
  {
    name: 'Civil Lines Branch',
    address: '87, 37/2D, GP Complex, Lal Bahadur Shastri Marg, Near GHS School, Civil Lines, Prayagraj, Uttar Pradesh',
    timings: '09:00 am to 09:00 pm',
    emergency: '09:00 pm to 09:00 am',
    isMain: false
  },
  {
    name: 'Happy Home Branch',
    address: 'Pongahat pull, Vishnapuri Colony, Ghayasuddinpur, Prayagraj, Uttar Pradesh',
    timings: '09:00 am to 09:00 pm',
    emergency: '09:00 pm to 09:00 am',
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
                    <p><strong>Timings:</strong> {branch.timings}</p>
                    <p><strong>Emergency:</strong> {branch.emergency}</p>
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
