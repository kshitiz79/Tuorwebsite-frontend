import React, { useState } from "react";
import './Blog.css';
import blogcard1 from "../../assets/blogcard1.png";
import blogcard2 from "../../assets/blogcard2.png";
import blogcard3 from "../../assets/blogcard3.png";
import blogcard4 from "../../assets/blogcard4.png";

function Blog() {
  // Create a state to track which post is expanded
  const [expandedPost, setExpandedPost] = useState(null);

  // Function to toggle the expanded state of each post
  const togglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId); // Toggle the expanded state
  };

  return (
    <div className="blog-page">
      <h1 className="blog-title">Travel Blog</h1>
      <div className="blog-content">
        {/* Blog Post 1 */}
        <div className="blog-post">
          <img src={blogcard1} alt="Destination" className="blog-image" />
          <h2 className="blog-post-title">Top 10 Destinations to Visit in 2025</h2>
          <p className="blog-post-excerpt">
            2025 is set to be an exciting year for travel! From exotic beaches to bustling cities, these destinations offer unique experiences for every traveler. In this post, we highlight the top 10 must-visit places in 2025.
          </p>
          
          {expandedPost === 1 && (
            <div className="expanded-content">
              <p>
                Explore the best beaches in the Maldives, dive into the history of ancient Rome, or hike through the breathtaking landscapes of New Zealand. Whether you’re an adventure seeker or a relaxation enthusiast, this list has something for everyone. Check out our detailed guide to plan your trip to these top destinations in 2025!
              </p>
            </div>
          )}
          <button className="read-more" onClick={() => togglePost(1)}>
            {expandedPost === 1 ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Blog Post 2 */}
        <div className="blog-post">
          <img src={blogcard2} alt="Destination" className="blog-image" />
          <h2 className="blog-post-title">The Ultimate Guide to Sustainable Travel</h2>
          <p className="blog-post-excerpt">
            Sustainable travel is becoming more important than ever. In this guide, we share practical tips for minimizing your environmental impact while exploring the world. Learn about eco-friendly accommodations, green transportation options, and more.
          </p>
          
          {expandedPost === 2 && (
            <div className="expanded-content">
              <p>
                Embrace the slow travel movement by taking the train instead of flying, staying in eco-friendly hotels, and reducing your plastic waste. In this post, we also share tips on responsible tourism and how to support local communities in a sustainable way.
              </p>
            </div>
          )}
          <button className="read-more" onClick={() => togglePost(2)}>
            {expandedPost === 2 ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Blog Post 3 */}
        <div className="blog-post">
          <img src={blogcard3} alt="Destination" className="blog-image" />
          <h2 className="blog-post-title">Must-Try Foods Around the World</h2>
          <p className="blog-post-excerpt">
            Traveling is not just about seeing new places, but also experiencing new flavors. In this post, we explore the must-try foods from different countries and regions. Get ready to tantalize your taste buds!
          </p>
         
          {expandedPost === 3 && (
            <div className="expanded-content">
              <p>
                Whether it's sushi in Japan, pasta in Italy, or street food in Thailand, every destination offers unique culinary delights. Learn about the best places to try local delicacies and discover new flavors from every corner of the globe.
              </p>
            </div>
          )}
          <button className="read-more" onClick={() => togglePost(3)}>
            {expandedPost === 3 ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Blog Post 4 */}
        <div className="blog-post">
          <img src={blogcard4} alt="Budget Travel" className="blog-image" />
          <h2 className="blog-post-title">How to Travel on a Budget</h2>
          <p className="blog-post-excerpt">
            Traveling doesn't have to be expensive! In this post, we share some practical tips and tricks for traveling on a budget. From finding affordable accommodations to saving on transportation, these tips will help you explore the world without breaking the bank.
          </p>
          
          {expandedPost === 4 && (
            <div className="expanded-content">
              <p>
                Learn how to save money by booking flights in advance, using budget-friendly transportation options, and staying in hostels or guesthouses. Additionally, we share tips on finding free activities and local deals in major cities to make your travel experience affordable and enjoyable.
              </p>
            </div>
          )}
          <button className="read-more" onClick={() => togglePost(4)}>
            {expandedPost === 4 ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;


