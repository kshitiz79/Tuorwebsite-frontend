import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About Us</h1>
        <p>Turning Your Travel Dreams into Unforgettable Memories</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Welcome to Vinayak Tours</h2>
          <p>
            At <strong>Vinayak Tours</strong>, we believe in turning your travel dreams into unforgettable memories.
            Based in the heart of Devbhumi, our mission is to offer personalized travel experiences that go beyond
            your expectations. Whether you're seeking serene escapes, thrilling adventures, or cultural discoveries,
            we are here to make your journey extraordinary.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Provide</h2>
          <ul>
            <li>
              <strong>Comprehensive Travel Packages:</strong> From meticulously planned itineraries to bespoke travel
              experiences, we offer a range of holiday packages tailored to suit your preferences. Explore pristine
              destinations, vibrant cultures, and awe-inspiring landscapes with us.
            </li>
            <li>
              <strong>Premium Transportation Services:</strong> Your comfort is our priority. We provide well-maintained,
              air-conditioned vehicles driven by professional chauffeurs to ensure safe and smooth travel.
            </li>
            <li>
              <strong>Memorable Activities:</strong> Vinayak Tours specializes in organizing activities that add a spark
              to your vacation. Whether it's trekking, river rafting, camping, or exploring hidden gems, we've got you
              covered.
            </li>
            <li>
              <strong>Hassle-Free Accommodations:</strong> We partner with top-notch hotels and resorts to provide you
              with luxurious stays that match your budget and style.
            </li>
            <li>
              <strong>Experienced Guides:</strong> Our local and knowledgeable guides make sure you experience the
              destinations authentically and safely.
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Facilities</h2>
          <ul>
            <li><strong>24/7 Customer Support:</strong> Always here to assist you before, during, and after your journey.</li>
            <li><strong>Customizable Tours:</strong> Tailored itineraries to match your interests and budget.</li>
            <li><strong>Safe and Secure Bookings:</strong> Transparent pricing with no hidden charges.</li>
            <li><strong>Exclusive Offers:</strong> Seasonal discounts and packages to make your trips more affordable.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>A Gift for You</h2>
          <p>
            At Vinayak Tours, we cherish our customers and the memories we create together. To express our gratitude, we
            provide a <strong>special gift</strong> to all our customers as they leave. It’s our way of saying “Thank You”
            for choosing us to be a part of your journey.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Trusted by countless travelers for our reliable and professional services.</li>
            <li>A team that goes the extra mile to make your trips seamless and delightful.</li>
            <li>A legacy of creating lifelong memories for our customers.</li>
          </ul>
        </div>
      </section>
      
    </div>
  );
}

export default About;

