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
                  <h3 className="reasonTitle">Reason 1</h3>
                  <p className="reasonText">
                    Body text for whatever you'd like to expand on the main point.
                  </p>
                </div>

                <div className="reason">
                  <h3 className="reasonTitle">Reason 2</h3>
                  <p className="reasonText">
                    Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes.
                  </p>
                </div>

                <div className="reason">
                  <h3 className="reasonTitle">Reason 3</h3>
                  <p className="reasonText">
                    Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context.
                  </p>
                </div>
              </div>
            </div>

            <div className="imageColumn">
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80"
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