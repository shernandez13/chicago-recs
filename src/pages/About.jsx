import Carousel from '../components/carousel/Carousel';
import carouselData from '../data/carouselSlides.json';


/**
 * About/Landing Page
 * Features hero section, carousel, and "Why Support Local Businesses" section
 */
const About = () => {
  const slides = carouselData.slides;

  return (
    <div className="aboutPage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="heroTitle">
            Discover Chicago Local Favorites!
          </h1>
          <p className="heroSubtitle">
            When visiting Chicago its tempting to try the deep dish and hot dogs but what do the locals eat?
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carouselSection">
        <div className="container">
          <Carousel slides={slides} autoPlay={true} interval={5000} />
        </div>
      </section>

      {/* Why Support Local Businesses Section */}
      <section className="whySection">
        <div className="container">
          <div className="grid">
            <div className="textColumn">
              <h2 className="sectionTitle">
                Why Support Local Businesses
              </h2>

              <div className="reasons">
                <div className="reason">
                  <h3 className="reasonTitle">Local Restaurants Preserve Community Culture</h3>
                  <p className="reasonText">
                    Local businesses reflect the character of their neighborhoods. Chicago’s family-owned restaurants often represent decades of cultural tradition, unique recipes, and personal stories. Supporting them helps keep these identities alive and prevents every neighborhood from feeling the same.
                  </p>
                </div>

                <div className="reason">
                  <h3 className="reasonTitle">Supporting Local Boosts the Local Economy</h3>
                  <p className="reasonText">
                    Every dollar spent at a local restaurant circulates back into the Chicago community. Small restaurants hire local employees, work with nearby suppliers, and help sustain the local economy. Supporting these businesses directly contributes to job growth and neighborhood stability.
                  </p>
                </div>

                <div className="reason">
                  <h3 className="reasonTitle">Local Restaurants Offer Better Quality & Authenticity</h3>
                  <p className="reasonText">
                    Independent restaurants focus on craftsmanship and authenticity. Instead of mass-produced menus, they offer carefully curated dishes, personal service, and a memorable dining experience. Choosing local means enjoying food made with care and creativity.
                  </p>
                </div>
              </div>
            </div>

            <div className="imageColumn">
              <img
                src="https://static.wixstatic.com/media/d875c5_4ec8ab0819964f91b0549b13842dfa63~mv2_d_1920_1280_s_2.jpg/v1/fill/w_975,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d875c5_4ec8ab0819964f91b0549b13842dfa63~mv2_d_1920_1280_s_2.jpg"
                alt="Delicious pancakes with whipped cream and fruit"
                className="featureImage"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;