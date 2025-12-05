import PropTypes from 'prop-types';


/**
 * Restaurant Card Component
 * Displays individual restaurant information with rank, name, cuisine, and description
 */
const RestaurantCard = ({ restaurant, rank }) => {
  return (
    <article className="restaurantCard">
      <div className="restaurantCardHeader">
        <h3 className="restaurantCardName">
          {rank && <span className="restaurantCardRank">#{rank}</span>}
          {restaurant.name}
        </h3>
        <div className="restaurantCardMeta">
          <span className="restaurantCardCuisine">{restaurant.cuisine}</span>
          <span className="restaurantCardSeparator">•</span>
          <span className="restaurantCardPrice">{restaurant.priceRange}</span>
          <span className="restaurantCardSeparator">•</span>
          <span className="restaurantCardRating">⭐ {restaurant.rating}</span>
        </div>
      </div>

      <div className="restaurantCardContent">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="restaurantCardImage"
          loading="lazy"
        />

        <div className="restaurantCardInfo">
          <p className="restaurantCardDescription">{restaurant.description}</p>

          <div className="restaurantCardDetails">
            <p className="restaurantCardAddress">
              <span className="restaurantCardLabel">📍</span>
              {restaurant.address}
            </p>

            {restaurant.specialties && restaurant.specialties.length > 0 && (
              <div className="restaurantCardSpecialties">
                <span className="restaurantCardLabel">Specialties:</span>
                <div className="restaurantCardTags">
                  {restaurant.specialties.map((specialty, index) => (
                    <span key={index} className="restaurantCardTag">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
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
  }).isRequired,
  rank: PropTypes.number,
};

export default RestaurantCard;