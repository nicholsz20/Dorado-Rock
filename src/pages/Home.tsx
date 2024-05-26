import { useEffect } from "react";
import { Link } from "react-router-dom";

import '../styles/Home.css'
import LearnMoreSection from "../components/LearnMoreSection";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div className="home-container">
      <div>
        <h2 className="home-header">
          <span>Welcome</span>
          <span>To</span>
          <span>Dorado Rock LLC</span>
        </h2>
        <div className="button-container">
          <button className="outline-button">
            <Link to="/products/">See Our Spirits</Link>
          </button>
          <button className="outline-button">
            <Link to="/about-us">Learn About Us</Link>
          </button>
          <button className="outline-button">
            <Link to="/contact-us">Contact Us</Link>
          </button>
        </div>
      </div>
      <LearnMoreSection />
    </div>
  );
}