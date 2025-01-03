import React, { useState } from 'react';
import "./ActivityDisplay.css";
import trekking from '../../assets/trekking.png'; 
import rafting from '../../assets/rafting.png';
import camping from '../../assets/camping.png';
import paragliding from '../../assets/paragliding.png'; 
import scubadiving from '../../assets/scubadiving.png';
import wildlifeSafari from '../../assets/wildlifeSafari.png';

function ActivityDisplay() { 
  const activities = [
    { img: trekking, title: 'Trekking', description: 'Discover scenic trails and breathtaking landscapes on guided treks.' },
    { img: rafting, title: 'River Rafting', description: 'Experience the thrill of white-water rafting on rushing rivers.' },
    { img: camping, title: 'Camping', description: 'Enjoy starlit nights and serene surroundings with our camping adventures.' },
    { img: paragliding, title: 'Paragliding', description: 'Soar through the skies and enjoy breathtaking aerial views.' },
    { img: scubadiving, title: 'Scuba Diving', description: 'Dive into the deep blue and explore vibrant marine life.' },
    { img: wildlifeSafari, title: 'Wildlife Safari', description: 'Encounter majestic wildlife in their natural habitats on a thrilling safari.' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextActivity = () => {
    if (currentIndex < activities.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevActivity = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
 
  return (
    <div className="activity-page">
      {/* Hero Section */}
      <section className="hero-section">
        
        <div className="hero-text">
          <h1>Adventure Awaits!</h1>
          <p>Explore thrilling activities to add excitement to your journey.</p>
        </div>
      </section>

      {/* Activities Slider Section */}
      <section className="activities-slider">
        <h2>Our Activities</h2>
        <div className="slider-container">
          <div
            className="activity-slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Adjust translation to show next activity
          >
            {activities.map((activity, index) => (
              <div key={index} className="activity">
                <img src={activity.img} alt={activity.title} />
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <button>Enquiry Now</button>
               
              </div>
            ))}
          </div>
        </div>
        
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Our Activities?</h2>
        <div className="features">
          <div className="feature">
            <h3>Expert Guides</h3>
            <p>Our activities are led by experienced guides ensuring your safety and enjoyment.</p>
          </div>
          <div className="feature">
            <h3>Top-Notch Equipment</h3>
            <p>We provide high-quality equipment for all activities to ensure the best experience.</p>
          </div>
          <div className="feature">
            <h3>Unforgettable Experiences</h3>
            <p>Create memories that will last a lifetime with our well-curated activities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ActivityDisplay;
