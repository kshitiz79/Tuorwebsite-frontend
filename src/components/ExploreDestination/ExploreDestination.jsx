import React from "react";
import { Link } from "react-router-dom";
import { destination_list } from "../../assets/assets";

function ExploreDestination() {
  return (
    <div className="bg-gray-100 mt-[60rem]">
      {/* Header Section */}
      <div className="bg-cover bg-center h-[40vh] flex items-center justify-center bg-[url('../../assets/destination-banner.jpg')]">
        <h1 className="text-white text-4xl font-bold">Explore Our Destinations</h1>
      </div>

      {/* Destination List Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {destination_list.map((destination) => (
            <div
              key={destination._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{destination.title}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {destination.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
                    Enquiry Now
                  </button>
                  <Link
                    to={`/destination/${destination._id}`}
                    className="flex-1 bg-gray-200 text-indigo-600 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300 text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreDestination;
