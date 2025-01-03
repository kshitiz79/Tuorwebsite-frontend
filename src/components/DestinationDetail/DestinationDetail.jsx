import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { destination_list } from "../../assets/assets"; // Assuming destination_list is your local data
import "./DestinationDetail.css";

function DestinationDetail() {
  const { id } = useParams(); // Get the id from the URL
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    // Find the destination based on the id from the route
    const selectedDestination = destination_list.find(dest => dest._id === id);
    setDestination(selectedDestination);
  }, [id]); // Rerun this effect when id changes

  if (!destination) {
    return <p>Loading...</p>;
  }

  return (
    <div className="destination-detail-page">
      <div className="destination-detail-header">
        <h1>{destination.name}</h1>
        <img
          src={destination.image}
          alt={destination.name}
          className="destination-detail-image"
        />
      </div>

      <div className="destination-detail-info">
        <h2>Overview</h2>
        <p>{destination.about}</p>

        <h3>Highlights</h3>
        <ul>
          {destination.highlights?.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>

        <h3>Things to Do</h3>
        <p>{destination.thingsToDo}</p>

        <h3>Best Time to Visit</h3>
        <p>{destination.bestTimeToVisit}</p>

        <button className="details-enquiry">Enquiry Now</button>
      </div>
    </div>
  );
}

export default DestinationDetail;
