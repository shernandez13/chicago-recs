import { useRestaurantContext } from '../context/RestaurantContext';
import RestaurantList from '../components/restaurant/RestaurantList';


/**
 * Top 10 Restaurants Page
 * Displays list of top 10 local favorite restaurants
 */
const TopRestaurants = () => {
  const { getTopRestaurants, loading, error } = useRestaurantContext();
  const topRestaurants = getTopRestaurants(10);

  return (
    <div className="topRestaurantsPage">
      <section className="header">
        <div className="container">
          <h1 className="title">Top 10 Chicago Local Favorites</h1>
          <p className="subtitle">
            Discover the best local restaurants in Chicago, handpicked by those who know the city best.
            From deep-dish pizza to fine dining, these are the spots locals love.
          </p>
        </div>
      </section>

      <section className="listSection">
        <div className="container">
          {loading && (
            <div className="loading">
              <p>Loading restaurants...</p>
            </div>
          )}

          {error && (
            <div className="error">
              <p>Error loading restaurants: {error}</p>
            </div>
          )}

          {!loading && !error && (
            <RestaurantList restaurants={topRestaurants} showRank={true} />
          )}
        </div>
      </section>
    </div>
  );
};

export default TopRestaurants;