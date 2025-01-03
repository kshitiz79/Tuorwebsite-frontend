import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import ActivityDisplay from "./components/ActivityDisplay/ActivityDisplay";
import ExploreDestination from "./components/ExploreDestination/ExploreDestination";
import LoginPage from "./components/LoginPage/LoginPage";
import Packages from "./components/PackageDetail/PackageDetail";
import Footer from "./components/Footer/Footer";
import DestinationDetail from "./components/DestinationDetail/DestinationDetail"; // Import DestinationDetail

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<ActivityDisplay />} />
        <Route path="/destination" element={<ExploreDestination />} />
        <Route path="/destination/:id" element={<DestinationDetail />} /> {/* Add dynamic route for destination details */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
     
    </div>
  );
}

export default App;

























