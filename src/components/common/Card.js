import React from "react"
import PropTypes from "prop-types"

const Card = ({
  imageSrc,
  price,
  description,
  currency,
  location
}) => {
  return (
    <div className="card-container">
      <div className="card-container__image">
        Image
      </div>
      <div className="card-container__description">
        Description
      </div>
      <div className="card-container__location">
        Location
      </div>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string,
  location: PropTypes.string.isRequired,
}

Card.defaultProps = {
  currency: "$",
}

export default Card
