import React from "react";
import { useParams } from "react-router-dom";

function PackageDetail() {
  const packageData = {
    mountain: [
      { id: 1, name: "Manali Adventure", details: "Explore the scenic beauty of Manali..." },
      { id: 2, name: "Leh-Ladakh Expedition", details: "Experience the thrill of Leh and Ladakh..." },
      { id: 3, name: "Himalayan Trek", details: "Embark on an unforgettable trekking experience..." },
    ],
    beach: [
      { id: 1, name: "Goa Beach Holiday", details: "Relax on the serene beaches of Goa..." },
      { id: 2, name: "Andaman Getaway", details: "Explore the exotic beaches of Andaman..." },
      { id: 3, name: "Kerala Backwaters", details: "Enjoy the tranquility of Kerala's backwaters..." },
    ],
    // Other categories as shown in your code...
  };

  const { id } = useParams();
  const [selectedPackage, setSelectedPackage] = React.useState(null);

  React.useEffect(() => {
    const allPackages = [
      ...packageData.mountain,
      ...packageData.beach,
      // Add other categories here...
    ];
    const packageDetails = allPackages.find((pkg) => pkg.id === parseInt(id));
    setSelectedPackage(packageDetails);
  }, [id]);

  if (!selectedPackage) return <p className="text-center mt-12">Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-indigo-600 text-white p-6 rounded-lg mb-8 shadow-md">
          <h1 className="text-4xl font-bold">{selectedPackage.name}</h1>
          <p className="text-lg mt-2">{selectedPackage.details}</p>
        </div>

        {/* Additional Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Package Details</h2>
          <p className="text-gray-700 leading-relaxed">
            {selectedPackage.details}
          </p>
          <div className="mt-6">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetail;
