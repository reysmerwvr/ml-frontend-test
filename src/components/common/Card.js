import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/sass/components/Card.scss';
import { getPriceText } from '../../utils/helpers';
import shippingImg from '../../assets/images/ic_shipping.png';

const Card = ({
  id,
  title,
  thumbnail,
  price,
  address,
  shipping,
  currency,
  handleClick,
}) => {
  const { state_name: stateName } = address;
  const { free_shipping: freeShipping } = shipping;
  const priceText = getPriceText(currency, price);
  return (
    <div
      className="card-container"
      onClick={() => handleClick(id)}
      role="button"
    >
      <div className="card-container__image">
        <img src={thumbnail} alt={id} />
      </div>
      <div className="card-container__description">
        <h2 className="card-container__description__price">
          {priceText}
          {freeShipping && <img src={shippingImg} alt="Shipping" />}
        </h2>
        <p className="card-container__description__text">{title}</p>
      </div>
      <div className="card-container__location">{stateName}</div>
    </div>
  );
};

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  address: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  shipping: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  currency: PropTypes.string,
};

Card.defaultProps = {
  currency: '$',
};

export default Card;
