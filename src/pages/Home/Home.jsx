import React, { useState } from "react";
import { Link } from "react-router-dom";
import manali from "../../assets/manali.png";
import goa from "../../assets/goa.png";
import chardham from "../../assets/chardham.png";
import adventure from "../../assets/adventure.png";
import honeymoon from "../../assets/honeymoon.png";
import axios from "axios";
import ReviewSection from "../../components/Review/Review";
 
function Home() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    package: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/form", {
        name: "John Doe",
        email: "john@example.com",
      });
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error.response?.data?.message || error.message);
    }
  };
  
  const packageData = {
    mountain: [
      { id: 1, name: "Manali Adventure", details: "Explore the scenic beauty of Manali. This adventure-packed tour includes trekking, paragliding, and river rafting." },
      { id: 2, name: "Leh-Ladakh Expedition", details: "Experience the thrill of Leh and Ladakh with its rugged mountains, serene monasteries, and breathtaking views." },
      { id: 3, name: "Himalayan Trek", details: "Embark on an unforgettable trekking experience through the Himalayan range." },
    ],
    beach: [
      { id: 1, name: "Goa Beach Holiday", details: "Relax on the serene beaches of Goa and enjoy vibrant nightlife and water sports." },
      { id: 2, name: "Andaman Getaway", details: "Explore exotic beaches, indulge in snorkeling or scuba diving, and visit Radhanagar Beach." },
      { id: 3, name: "Kerala Backwaters", details: "Enjoy houseboat cruises in Alleppey with picturesque canals and traditional Kerala cuisine." },
    ],
    heritage: [
      { id: 1, name: "Golden Triangle Tour", details: "Explore Delhi, Agra, and Jaipur's rich heritage and architectural wonders." },
      { id: 2, name: "Char Dham Yatra", details: "A spiritual journey to India's sacred Char Dham - Yamunotri, Gangotri, Kedarnath, and Badrinath." },
      { id: 3, name: "Rajasthan Royal Tour", details: "Experience the grandeur of Rajasthan with its majestic forts, palaces, and desert landscapes." },
    ],
    honeymoon: [
      { id: 1, name: "Maldives Bliss", details: "Romantic getaway in the Maldives with overwater villas and private beach dinners." },
      { id: 2, name: "Switzerland Dreams", details: "Enjoy the scenic beauty of Switzerland, from the Alps to Interlaken and Lucerne." },
      { id: 3, name: "Paris Romance", details: "A romantic experience in Paris with the Eiffel Tower and fine French cuisine." },
    ],
    adventure: [
      { id: 1, name: "Bungee Jumping Rishikesh", details: "Feel the adrenaline rush with bungee jumping in Rishikesh." },
      { id: 2, name: "Skydiving Dubai", details: "An exhilarating skydiving experience over Dubai's Palm Jumeirah." },
      { id: 3, name: "Scuba Diving Andaman", details: "Explore underwater life in Andaman with scuba diving adventures." },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 mt-[68rem]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Welcome to Our Tour Packages
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md mb-8">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto"
            required
          />
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            placeholder="Your Phone Number"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto"
            required
          />
          <select
            name="package"
            value={formData.package}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto"
            required
          >
            <option value="" disabled>Select a Package</option>
            {Object.entries(packageData).map(([category, packages]) =>
              packages.map((pkg) => (
                <option key={pkg.id} value={pkg.name}>
                  {pkg.name}
                </option>
              ))
            )}
          </select>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
        {/* Package Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mountain Packages */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={manali} alt="Mountain Packages" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-indigo-600 mb-4">Mountain Adventures</h2>
              <div className="space-y-4">
                {packageData.mountain.map((pkg) => (
                  <Link to={`/package/${pkg.id}`} key={pkg.id} className="block hover:underline">
                    <h3 className="text-lg font-semibold">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.details}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Beach Packages */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={goa} alt="Beach Packages" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-indigo-600 mb-4">Beach Escapes</h2>
              <div className="space-y-4">
                {packageData.beach.map((pkg) => (
                  <Link to={`/package/${pkg.id}`} key={pkg.id} className="block hover:underline">
                    <h3 className="text-lg font-semibold">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.details}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Repeat similar structure for other categories */}
          {/* Heritage */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={chardham} alt="Heritage Packages" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-indigo-600 mb-4">Heritage Tours</h2>
              <div className="space-y-4">
                {packageData.heritage.map((pkg) => (
                  <Link to={`/package/${pkg.id}`} key={pkg.id} className="block hover:underline">
                    <h3 className="text-lg font-semibold">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.details}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Honeymoon */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={honeymoon} alt="Honeymoon Packages" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-indigo-600 mb-4">Honeymoon Getaways</h2>
              <div className="space-y-4">
                {packageData.honeymoon.map((pkg) => (
                  <Link to={`/package/${pkg.id}`} key={pkg.id} className="block hover:underline">
                    <h3 className="text-lg font-semibold">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.details}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Adventure */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={adventure} alt="Adventure Packages" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-indigo-600 mb-4">Adventure Activities</h2>
              <div className="space-y-4">
                {packageData.adventure.map((pkg) => (
                  <Link to={`/package/${pkg.id}`} key={pkg.id} className="block hover:underline">
                    <h3 className="text-lg font-semibold">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.details}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ReviewSection/>
      </div>
    </div>
  );
}

export default Home;
