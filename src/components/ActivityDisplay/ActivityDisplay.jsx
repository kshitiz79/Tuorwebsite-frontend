import React, { useState } from "react";
import trekking from "../../assets/trekking.png";
import rafting from "../../assets/rafting.png";
import camping from "../../assets/camping.png";
import paragliding from "../../assets/paragliding.png";
import scubadiving from "../../assets/scubadiving.png";
import wildlifeSafari from "../../assets/wildlifeSafari.png";

function ActivityDisplay() {
  const activities = [
    {
      img: trekking,
      title: "Trekking",
      description: "Discover scenic trails and breathtaking landscapes on guided treks.",
    },
    {
      img: rafting,
      title: "River Rafting",
      description: "Experience the thrill of white-water rafting on rushing rivers.",
    },
    {
      img: camping,
      title: "Camping",
      description: "Enjoy starlit nights and serene surroundings with our camping adventures.",
    },
    {
      img: paragliding,
      title: "Paragliding",
      description: "Soar through the skies and enjoy breathtaking aerial views.",
    },
    {
      img: scubadiving,
      title: "Scuba Diving",
      description: "Dive into the deep blue and explore vibrant marine life.",
    },
    {
      img: wildlifeSafari,
      title: "Wildlife Safari",
      description: "Encounter majestic wildlife in their natural habitats on a thrilling safari.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextActivity = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, activities.length - 1));
  };

  const prevActivity = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="bg-gray-100 mt-[42rem]">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[50vh] flex items-center justify-center bg-[url('../../assets/holidaybackground1.jpg')]">
        <div className="text-center text-black px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Adventure Awaits!</h1>
          <p className="text-base sm:text-lg font-medium">
            Explore thrilling activities to add excitement to your journey.
          </p>
        </div>
      </section>

      {/* Activities Slider Section */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Activities</h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-4"
                  style={{ width: "100%" }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={activity.img}
                      alt={activity.title}
                      className="w-full h-56 sm:h-64 object-cover"
                    />
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                        {activity.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{activity.description}</p>
                      <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevActivity}
            aria-label="Previous activity"
            className={`absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full shadow-md 
              ${currentIndex === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200"}`}
            disabled={currentIndex === 0}
          >
            &#8249;
          </button>
          <button
            onClick={nextActivity}
            aria-label="Next activity"
            className={`absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full shadow-md 
              ${currentIndex === activities.length - 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200"}`}
            disabled={currentIndex === activities.length - 1}
          >
            &#8250;
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Our Activities?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Expert Guides</h3>
            <p className="text-gray-700">
              Our activities are led by experienced guides ensuring your safety and enjoyment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Top-Notch Equipment</h3>
            <p className="text-gray-700">
              We provide high-quality equipment for all activities to ensure the best experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Unforgettable Experiences</h3>
            <p className="text-gray-700">
              Create memories that will last a lifetime with our well-curated activities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ActivityDisplay;
