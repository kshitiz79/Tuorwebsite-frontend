import React from "react";
import { Link } from "react-router-dom"; // Import your data file
import manali from "../../assets/manali.png";
import goa from "../../assets/goa.png";
import chardham from "../../assets/chardham.png";
import adventure from "../../assets/adventure.png";
import honeymoon from "../../assets/honeymoon.png";
import "./Home.css";

function Home() {
  const packageData = {
    mountain: [
      { 
        id: 1, 
        name: "Manali Adventure", 
        details: "Explore the scenic beauty of Manali. This adventure-packed tour includes trekking through lush green valleys, paragliding over the Solang Valley, river rafting in the Beas River, visiting Rohtang Pass, and soaking in the charm of Old Manali's cafes and culture." 
      },
      { 
        id: 2, 
        name: "Leh-Ladakh Expedition", 
        details: "Experience the thrill of Leh and Ladakh with its rugged mountains, serene monasteries, and breathtaking views. Highlights include a drive through Khardung La Pass, Pangong Lake camping, and exploring Nubra Valley on a double-humped camel ride." 
      },
      { 
        id: 3, 
        name: "Himalayan Trek", 
        details: "Embark on an unforgettable trekking experience through the Himalayan range. Traverse lush forests, cross glacial rivers, and camp under the starry sky. Suitable for adventure enthusiasts seeking a blend of challenge and natural beauty." 
      },
    ],
    beach: [
      { 
        id: 1, 
        name: "Goa Beach Holiday", 
        details: "Relax on the serene beaches of Goa. Enjoy water sports, vibrant nightlife, delicious seafood, and cultural tours of old Portuguese architecture. Perfect for a mix of relaxation and fun." 
      },
      { 
        id: 2, 
        name: "Andaman Getaway", 
        details: "Explore the exotic beaches of Andaman. Visit Radhanagar Beach, indulge in snorkeling or scuba diving, and explore the historical Cellular Jail. A tropical paradise ideal for beach lovers." 
      },
      { 
        id: 3, 
        name: "Kerala Backwaters", 
        details: "Enjoy the tranquility of Kerala's backwaters with houseboat cruises in Alleppey. Experience traditional Kerala cuisine, lush greenery, and picturesque canals. A serene escape into nature's lap." 
      },
    ],
    heritage: [
      { 
        id: 1, 
        name: "Golden Triangle Tour", 
        details: "Explore Delhi, Agra, and Jaipur's rich heritage. Highlights include the Taj Mahal, Jaipur's Amber Fort, and Delhi's historic Red Fort. A perfect blend of history, culture, and architecture." 
      },
      { 
        id: 2, 
        name: "Char Dham Yatra", 
        details: "A spiritual journey to India's sacred Char Dham - Yamunotri, Gangotri, Kedarnath, and Badrinath. This pilgrimage offers a mix of devotion, stunning landscapes, and divine peace." 
      },
      { 
        id: 3, 
        name: "Rajasthan Royal Tour", 
        details: "Experience the grandeur of Rajasthan with its majestic forts, palaces, and desert landscapes. Visit Udaipur's City Palace, Jaisalmer's sand dunes, and Jaipur's Hawa Mahal for a royal experience." 
      },
    ],
    honeymoon: [
      { 
        id: 1, 
        name: "Maldives Bliss", 
        details: "Romantic getaway in the Maldives. Stay in overwater villas, enjoy private beach dinners, and explore coral reefs. A dream destination for couples seeking luxury and intimacy." 
      },
      { 
        id: 2, 
        name: "Switzerland Dreams", 
        details: "Enjoy the scenic beauty of Switzerland. Ride through the Alps on the Glacier Express, visit Interlaken, and experience romance in Lucerne. Perfect for couples who love picturesque landscapes." 
      },
      { 
        id: 3, 
        name: "Paris Romance", 
        details: "A romantic experience in the city of love. Explore the Eiffel Tower, enjoy Seine River cruises, and indulge in fine French cuisine. An unforgettable romantic retreat." 
      },
    ],
    adventure: [
      { 
        id: 1, 
        name: "Bungee Jumping Rishikesh", 
        details: "Feel the adrenaline rush with bungee jumping from India's highest platform in Rishikesh. A perfect activity for thrill-seekers amidst the scenic Himalayan backdrop." 
      },
      { 
        id: 2, 
        name: "Skydiving Dubai", 
        details: "An exhilarating skydiving experience over Dubai's iconic Palm Jumeirah or desert landscapes. A must-try for adventure enthusiasts visiting the UAE." 
      },
      { 
        id: 3, 
        name: "Scuba Diving Andaman", 
        details: "Explore underwater life in Andaman with scuba diving adventures. Witness colorful coral reefs, exotic marine species, and crystal-clear waters at Havelock and Neil Islands." 
      },
    ],
    international: [
      { 
        id: 1, 
        name: "Europe Highlights", 
        details: "Visit iconic destinations across Europe. Explore Paris, Rome, and Amsterdam, and enjoy stunning landscapes, rich history, and diverse cultures. Ideal for a comprehensive European experience." 
      },
      { 
        id: 2, 
        name: "Australian Adventure", 
        details: "Discover the wonders of Australia with visits to Sydney, the Great Barrier Reef, and Outback adventures. Perfect for travelers seeking diverse experiences and natural beauty." 
      },
      { 
        id: 3, 
        name: "USA West Coast", 
        details: "Explore California and beyond. Visit Los Angeles, San Francisco, Las Vegas, and iconic national parks like Yosemite. A mix of urban and natural wonders." 
      },
    ],
  };
  return (
    <div className="home-page">
      <h1>Welcome to Our Tour Packages</h1>

      <div className="package-category">
        <div className="category" id="mountain">
          <img src={manali} alt="Mountain Packages" className="category-image" />
          <h2>Mountain Adventures</h2>
          <div className="packages">
            {packageData.mountain.map((pkg) => (
              <Link to={`/package/${pkg.id}`} key={pkg.id} className="package-link">
                <div className="package-card">
                  <h3>{pkg.name}</h3>
                  <p>{pkg.details}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="category" id="beach">
          <img src={goa} alt="Beach Packages" className="category-image" />
          <h2>Beach Escapes</h2>
          <div className="packages">
            {packageData.beach.map((pkg) => (
              <Link to={`/package/${pkg.id}`} key={pkg.id} className="package-link">
                <div className="package-card">
                  <h3>{pkg.name}</h3>
                  <p>{pkg.details}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="category" id="heritage">
          <img src={chardham} alt="Heritage Packages" className="category-image" />
          <h2>Heritage Tours</h2>
          <div className="packages">
            {packageData.heritage.map((pkg) => (
              <Link to={`/package/${pkg.id}`} key={pkg.id} className="package-link">
                <div className="package-card">
                  <h3>{pkg.name}</h3>
                  <p>{pkg.details}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="category" id="adventure">
          <img src={adventure} alt="Adventure Packages" className="category-image" />
          <h2>Adventure Activities</h2>
          <div className="packages">
            {packageData.adventure.map((pkg) => (
              <Link to={`/package/${pkg.id}`} key={pkg.id} className="package-link">
                <div className="package-card">
                  <h3>{pkg.name}</h3>
                  <p>{pkg.details}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="category" id="honeymoon">
          <img src={honeymoon} alt="Honeymoon Packages" className="category-image" />
          <h2>Honeymoon Getaways</h2>
          <div className="packages">
            {packageData.honeymoon.map((pkg) => (
              <Link to={`/package/${pkg.id}`} key={pkg.id} className="package-link">
                <div className="package-card">
                  <h3>{pkg.name}</h3>
                  <p>{pkg.details}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
