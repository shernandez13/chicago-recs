import RecommendationForm from '../components/form/RecommendationForm';


/**
 * Recommendation Form Page
 * Features hero image with text overlay and submission form
 */
const RecommendForm = () => {
  const handleFormSubmit = (formData) => {
    // Additional handling if needed
    console.log('Form submitted from page component:', formData);
  };

  return (
    <div className="recommendFormPage">
      {/* Hero Section with Background Image */}
      <section className="hero">
        <div className="heroOverlay">
          <h1 className="heroTitle">Please Give Recommendations</h1>
          <p className="heroSubtitle">
            Fill Out The Form Below To Submit a Restaurant Recommendation
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="formSection">
        <div className="container">
          <RecommendationForm onSubmit={handleFormSubmit} />
        </div>
      </section>
    </div>
  );
};

export default RecommendForm;