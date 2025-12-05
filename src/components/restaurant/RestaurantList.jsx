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
