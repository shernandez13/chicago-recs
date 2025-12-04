import { useState } from 'react';
import PropTypes from 'prop-types';
import { validateRecommendationForm } from '../../utils/validation';


/**
 * Recommendation Form Component
 * Allows users to submit restaurant recommendations
 */
const RecommendationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    restaurantLocation: '',
    recommendedDishes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Handle input change
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateRecommendationForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Console log the submission
    console.log('=== Restaurant Recommendation Submitted ===');
    console.log('Restaurant Name:', formData.restaurantName);
    console.log('Restaurant Location:', formData.restaurantLocation);
    console.log('Recommended Dishes:', formData.recommendedDishes);
    console.log('==========================================');

    // Call parent callback if provided
    if (onSubmit) {
      onSubmit(formData);
    }

    // Show success state
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        restaurantName: '',
        restaurantLocation: '',
        recommendedDishes: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <form className="recommendationForm" onSubmit={handleSubmit} noValidate>
      <h2 className="title">Submit Restaurant</h2>

      {isSubmitted && (
        <div className="successMessage" role="alert">
          Thank you! Your recommendation has been submitted.
        </div>
      )}

      {/* Restaurant Name Field */}
      <div className="formGroup">
        <label htmlFor="restaurantName" className="label">
          Restaurant Name
        </label>
        <input
          type="text"
          id="restaurantName"
          name="restaurantName"
          value={formData.restaurantName}
          onChange={handleChange}
          className={`input ${
            errors.restaurantName ? 'inputError' : ''
          }`}
          placeholder="Enter Restaurant Name"
          aria-invalid={!!errors.restaurantName}
          aria-describedby={
            errors.restaurantName ? 'restaurantName-error' : undefined
          }
        />
        {errors.restaurantName && (
          <span
            id="restaurantName-error"
            className="errorText"
            role="alert"
          >
            {errors.restaurantName}
          </span>
        )}
      </div>

      {/* Restaurant Location Field */}
      <div className="formGroup">
        <label htmlFor="restaurantLocation" className="label">
          Restaurant Location
        </label>
        <input
          type="text"
          id="restaurantLocation"
          name="restaurantLocation"
          value={formData.restaurantLocation}
          onChange={handleChange}
          className={`input ${
            errors.restaurantLocation ? 'inputError' : ''
          }`}
          placeholder="Enter Restaurant Location"
          aria-invalid={!!errors.restaurantLocation}
          aria-describedby={
            errors.restaurantLocation ? 'restaurantLocation-error' : undefined
          }
        />
        {errors.restaurantLocation && (
          <span
            id="restaurantLocation-error"
            className="errorText"
            role="alert"
          >
            {errors.restaurantLocation}
          </span>
        )}
      </div>

      {/* Recommended Dishes Field */}
      <div className="formGroup">
        <label htmlFor="recommendedDishes" className="label">
          What dishes do you recommend?
        </label>
        <textarea
          id="recommendedDishes"
          name="recommendedDishes"
          value={formData.recommendedDishes}
          onChange={handleChange}
          className={`textarea ${
            errors.recommendedDishes ? 'inputError' : ''
          }`}
          placeholder="Enter your question or message"
          rows="5"
          aria-invalid={!!errors.recommendedDishes}
          aria-describedby={
            errors.recommendedDishes ? 'recommendedDishes-error' : undefined
          }
        />
        {errors.recommendedDishes && (
          <span
            id="recommendedDishes-error"
            className="errorText"
            role="alert"
          >
            {errors.recommendedDishes}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="submitButton"
        disabled={isSubmitted}
      >
        {isSubmitted ? 'Submitted!' : 'Submit'}
      </button>
    </form>
  );
};

RecommendationForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default RecommendationForm;