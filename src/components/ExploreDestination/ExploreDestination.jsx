import React from 'react';
import { Link } from 'react-router-dom';
import { destination_list } from '../../assets/assets'; 
import "./ExploreDestination.css";

function ExploreDestination() {
  return (
    <div className="destination-page">
      <div className="destination-header">
        <h1 className="destination-text">Explore Our Destinations</h1>
      </div>

      <div className="destination-list">
        {destination_list.map(destination => (
          <div className="destination-card" key={destination._id}>
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <div className="destination-info">
              <h2 className="destination-name">{destination.name}</h2>
              <p>{destination.title}</p>
              <p>{destination.description}</p>
              <div className='destination-button'>
                <button>ENQUIRY NOW</button>
                <Link to={`/destination/${destination._id}`}>
                  <button>VIEW DETAILS</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreDestination;


