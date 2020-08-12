import React from "react"
import PropTypes from "prop-types"
import "../../assets/sass/components/Card.scss"
import { getPriceText } from "../../utils/helpers"
import shippingImg from "../../assets/images/ic_shipping.png"

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
  const { state_name } = address
  const { free_shipping } = shipping
  const priceText = getPriceText(currency, price)
  return (
    <div className="card-container" onClick={() => handleClick(id)}>
      <div className="card-container__image">
        <img src={thumbnail} alt={id} />
      </div>
      <div className="card-container__description">
        <h2 className="card-container__description__price">
          {priceText}
          {free_shipping && <img src={shippingImg} alt="Shipping" />}
        </h2>
        <p className="card-container__description__text">{title}</p>
      </div>
      <div className="card-container__location">{state_name}</div>
    </div>
  )
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
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
