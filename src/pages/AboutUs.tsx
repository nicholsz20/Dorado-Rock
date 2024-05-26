import { useEffect } from "react";
import InstagramEmbed from "../components/InstagramEmbed";
import "../styles/AboutUs.css";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutus-page-container">
      <div className="aboutus-header">
        <div className="aboutus-header-text">
          <h1>
            <span>About </span>
            <span>Dorado Rock LLC</span>
          </h1>
        </div>
      </div>
      <div className="aboutus-content">
        <div className="instagram-column">
          <InstagramEmbed />
        </div>
        <div className="aboutus-text">
          <h2>HOW IT STARTED</h2>
          <p>
            Dorado Rock was founded in 2021 after months of considering how to
            enter the spirits industry. What began as a "sure, why not?"
            experiment soon evolved into a passionate endeavor. We honed our
            skills and built a portfolio focused exclusively on spirits. By late
            2024, we will venture into the wine category. Our goal is to curate
            a portfolio of distinctive products that meet underserved needs in
            North Carolina. We are committed to forming genuine partnerships
            with our suppliers, ABC Boards, retailers, and consumers to deliver
            the highest quality products to the market. We have invested the
            same care in building our team as we have in developing our
            portfolio. This combination defines our unique identity. Though we
            are a young broker, we have quickly established ourselves as a
            premier beverage broker through our core principles of quality,
            transparency, and partnership.
          </p>
        </div>
      </div>
    </div>
  );
}
