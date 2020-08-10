import React from "react"
import PropTypes from "prop-types"
import "../../assets/sass/components/Card.scss"
import shippingImg from "../../assets/images/ic_shipping.png"

const Card = ({ id, title, thumbnail, price, address, shipping, currency }) => {
  const { state_name } = address
  const { free_shipping } = shipping
  return (
    <div className="card-container">
      <div className="card-container__image">
        <img src={thumbnail} alt={id} />
      </div>
      <div className="card-container__description">
        <h2 className="card-container__description__price">
          {`${currency} ${price}`}
          {free_shipping && <img src={shippingImg} alt="Shipping" />}
        </h2>
        <p className="card-container__description__text">{title}</p>
      </div>
      <div className="card-container__location">{state_name}</div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  address: PropTypes.object.isRequired,
  shipping: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  currency: PropTypes.string,
}

Card.defaultProps = {
  currency: "$",
}

export default Card
