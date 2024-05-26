import InstagramEmbed from './InstagramEmbed';
import '../styles/LearnMoreSection.css'

const LearnMoreSection = () => {
  return (
    <div className="learn-more-container">
      <div className="instagram-column">
        <InstagramEmbed />
      </div>
      <div className="learn-more-content">
        <div className="column">
          <h2>TRANSPARENCY. QUALITY. PARTNER.</h2>
          <p>
            We aim to provide North Carolina with wine and spirits that go beyond merely filling your glass. The craft of wine-making and distilling begins with the dedicated individuals behind it. Our team is eager to bring the finest products to our great state.
          </p>
        </div>
        <div className="column">
          <h2>NORTH CAROLINA DONE DIFFERENTLY.</h2>
          <p>
            At Dorado Rock, we take pride in our expertly curated selection and the knowledgeable approach of our staff. We collaborate with both large and small suppliers, recognizing that quality can come from unexpected sources. While we deliver what consumers desire, we also keep our offerings fresh, unique, and eclectic, ensuring your customers always have something new to explore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreSection;
