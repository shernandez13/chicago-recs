import PropTypes from 'prop-types';
import RestaurantCard from './RestaurantCard';


/**
 * Restaurant List Component
 * Container for displaying multiple restaurant cards
 */
const RestaurantList = ({ restaurants, showRank = true }) => {
  if (!restaurants || restaurants.length === 0) {
    return (
      <div className="empty">
        <p>No restaurants to display.</p>
      </div>
    );
  }

  return (
    <div className="restaurantList">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          rank={showRank ? restaurant.rank : null}
        />
      ))}
    </div>
  );
};

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      cuisine: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      priceRange: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      specialties: PropTypes.arrayOf(PropTypes.string),
      rank: PropTypes.number,
    })
  ).isRequired,
  showRank: PropTypes.bool,
};

export default RestaurantList;