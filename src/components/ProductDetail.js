import React from "react"
import PropTypes from "prop-types"
import "../assets/sass/components/ProductDetail.scss"

const ProductDetail = ({
  name,
  imageSrc,
  price,
  description,
  currency,
  type,
  numOfSold,
  buttonText,
}) => {
  return (
    <div className="product-container">
      <div className="product-container__image">
        <img className="product-container__image__img" src={imageSrc} alt={name} />
      </div>
      <div className="product-container__description">
        <p className="product-container__description__p">{`${type} - ${numOfSold} vendidos`}</p>
        <h2 className="product-container__description__h2">{name}</h2>
        <h1 className="product-container__description__h1">{`${currency} ${price}`}</h1>
        <button className="product-container__description__btn">{buttonText}</button>
      </div>
      <div className="product-container__detail">
        <h2 className="product-container__image__h2">Descripción del producto</h2>
        <p className="product-container__image__p">{description}</p>
      </div>
    </div>
  )
}

ProductDetail.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string,
  type: PropTypes.string.isRequired,
  numOfSold: PropTypes.number,
  buttonText: PropTypes.string,
}

ProductDetail.defaultProps = {
  currency: "$",
  type: "Nuevo",
  numOfSold: 0,
  buttonText: "Comprar Ahora",
}

export default ProductDetail
