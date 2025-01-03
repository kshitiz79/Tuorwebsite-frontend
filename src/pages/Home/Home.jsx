import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReviewSection from "../../components/Review/Review";
import manali from "../../assets/manali.png";
import goa from "../../assets/goa.png";
import chardham from "../../assets/chardham.png";
import adventure from "../../assets/adventure.png";
import honeymoon from "../../assets/honeymoon.png";

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
      const response = await axios.post("http://localhost:4000/api/form", formData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error.response?.data?.message || error.message);
    }
  };

  const packageData = {
    mountain: {
      image: manali,
      title: "Mountain Adventures",
      packages: [
        { id: 1, name: "Manali Adventure", details: "Explore the scenic beauty of Manali with thrilling activities." },
        { id: 2, name: "Leh-Ladakh Expedition", details: "Experience the rugged beauty and serenity of Ladakh." },
        { id: 3, name: "Himalayan Trek", details: "Embark on an unforgettable trek through the Himalayas." },
      ],
    },
    beach: {
      image: goa,
      title: "Beach Escapes",
      packages: [
        { id: 1, name: "Goa Beach Holiday", details: "Relax on the serene beaches of Goa with vibrant nightlife." },
        { id: 2, name: "Andaman Getaway", details: "Snorkeling, scuba diving, and stunning beach views await you." },
        { id: 3, name: "Kerala Backwaters", details: "Houseboat cruises in Alleppey with picturesque views." },
      ],
    },
    heritage: {
      image: chardham,
      title: "Heritage Tours",
      packages: [
        { id: 1, name: "Golden Triangle Tour", details: "Explore Delhi, Agra, and Jaipur's rich heritage." },
        { id: 2, name: "Char Dham Yatra", details: "A spiritual journey to India's sacred Char Dham." },
        { id: 3, name: "Rajasthan Royal Tour", details: "Experience the grandeur of Rajasthan's culture." },
      ],
    },
    honeymoon: {
      image: honeymoon,
      title: "Honeymoon Getaways",
      packages: [
        { id: 1, name: "Maldives Bliss", details: "Romantic getaway in the Maldives with overwater villas." },
        { id: 2, name: "Switzerland Dreams", details: "Enjoy the scenic beauty of Switzerland’s Alps." },
        { id: 3, name: "Paris Romance", details: "A romantic experience in Paris with the Eiffel Tower." },
      ],
    },
    adventure: {
      image: adventure,
      title: "Adventure Activities",
      packages: [
        { id: 1, name: "Bungee Jumping Rishikesh", details: "Feel the adrenaline rush in Rishikesh." },
        { id: 2, name: "Skydiving Dubai", details: "Exhilarating skydiving over Dubai's Palm Jumeirah." },
        { id: 3, name: "Scuba Diving Andaman", details: "Explore underwater life in Andaman." },
      ],
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 lg:mt-[59rem] mt-80">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Welcome to Our Tour Packages
        </h1>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md mb-8"
        >
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
            <option value="" disabled>
              Select a Package
            </option>
            {Object.values(packageData).map((category) =>
              category.packages.map((pkg) => (
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
          {Object.entries(packageData).map(([key, { image, title, packages }]) => (
            <div key={key} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={image} alt={`${title}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-indigo-600 mb-4">{title}</h2>
                <div className="space-y-4">
                  {packages.map((pkg) => (
                    <Link to={`/package/${pkg.id}`} key={pkg.id} className="block hover:underline">
                      <h3 className="text-lg font-semibold">{pkg.name}</h3>
                      <p className="text-gray-600 text-sm">{pkg.details}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <ReviewSection />
      </div>
    </div>
  );
}

export default Home;
