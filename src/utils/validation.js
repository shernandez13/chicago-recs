/**
 * Form validation utilities
 */

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate required field
 * @param {string} value - Value to check
 * @returns {boolean} True if field has content
 */
export const isRequired = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Validate minimum length
 * @param {string} value - Value to check
 * @param {number} minLength - Minimum required length
 * @returns {boolean} True if meets minimum length
 */
export const hasMinLength = (value, minLength) => {
  return value && value.trim().length >= minLength;
};

/**
 * Validate form data for recommendation form
 * @param {Object} formData - Form data object
 * @returns {Object} Errors object with field-specific error messages
 */
export const validateRecommendationForm = (formData) => {
  const errors = {};

  // Restaurant Name validation
  if (!isRequired(formData.restaurantName)) {
    errors.restaurantName = 'Restaurant name is required';
  }

  // Restaurant Location validation
  if (!isRequired(formData.restaurantLocation)) {
    errors.restaurantLocation = 'Restaurant location is required';
  }

  // Recommended Dishes validation
  if (!isRequired(formData.recommendedDishes)) {
    errors.recommendedDishes = 'Please tell us what dishes you recommend';
  } else if (!hasMinLength(formData.recommendedDishes, 10)) {
    errors.recommendedDishes = 'Please provide at least 10 characters';
  }

  return errors;
};