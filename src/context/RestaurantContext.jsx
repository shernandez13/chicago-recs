import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useRestaurants } from '../hooks/useRestaurants';

const RestaurantContext = createContext(undefined);

/**
 * Restaurant Context Provider Component
 * Provides restaurant data and helper functions to all child components
 */
export const RestaurantProvider = ({ children }) => {
  const { restaurants, loading, error } = useRestaurants();

  /**
   * Get top N restaurants sorted by rank
   * @param {number} count - Number of restaurants to return
   * @returns {Array} Sorted array of top restaurants
   */
  const getTopRestaurants = (count = 10) => {
    return restaurants
      .sort((a, b) => a.rank - b.rank)
      .slice(0, count);
  };

  /**
   * Get a single restaurant by ID
   * @param {string} id - Restaurant ID
   * @returns {Object|undefined} Restaurant object or undefined
   */
  const getRestaurantById = (id) => {
    return restaurants.find(r => r.id === id);
  };

  /**
   * Filter restaurants by cuisine type
   * @param {string} cuisine - Cuisine type to filter by
   * @returns {Array} Filtered array of restaurants
   */
  const getRestaurantsByCuisine = (cuisine) => {
    return restaurants.filter(r =>
      r.cuisine.toLowerCase() === cuisine.toLowerCase()
    );
  };

  const value = {
    restaurants,
    loading,
    error,
    getTopRestaurants,
    getRestaurantById,
    getRestaurantsByCuisine,
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};

RestaurantProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Custom hook to use the Restaurant Context
 * @throws {Error} If used outside of RestaurantProvider
 * @returns {Object} Restaurant context value
 */
export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurantContext must be used within RestaurantProvider');
  }
  return context;
};