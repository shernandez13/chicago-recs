import { useState, useEffect } from 'react';
import restaurantsData from '../data/restaurants.json';

/**
 * Custom hook to fetch and manage restaurant data
 * @returns {{restaurants: Array, loading: boolean, error: string|null}}
 */
export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate async data fetching (in case we switch to API later)
    const loadRestaurants = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));

        setRestaurants(restaurantsData.restaurants);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadRestaurants();
  }, []);

  return { restaurants, loading, error };
};