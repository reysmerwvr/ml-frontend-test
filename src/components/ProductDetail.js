import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../actions';
import { getPriceText } from '../utils/helpers';
import '../assets/sass/components/ProductDetail.scss';
import { ProductsContext } from '../contexts/ProductsContext';

const ProductDetail = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const { id } = useParams();
  const { item, description } = state;
  const itemLength = Object.entries(item).length;

  useEffect(() => {
    if (id && dispatch) {
      fetchProduct({ id, dispatch });
    }
  }, [id, dispatch]);

  if (itemLength <= 0) {
    return null;
  }

  const {
    title, price, condition, pictures, sold_quantity: soldQuantity,
  } = item;
  const priceText = getPriceText('$', price);
  const conditionText = `${
    condition === 'new' ? 'Nuevo' : 'Usado'
  } - ${soldQuantity} vendidos`;
  const { secure_url: secureUrl } = pictures[0];

  return (
    <div className="product-container">
      <div className="product-container__image">
        <img className="product-container__image__img" src={secureUrl} alt={title} />
      </div>
      <div className="product-container__description">
        <p className="product-container__description__p">{conditionText}</p>
        <h2 className="product-container__description__h2">{title}</h2>
        <h1 className="product-container__description__h1">{priceText}</h1>
        <button type="button" className="product-container__description__btn">
          Comprar Ahora
        </button>
      </div>
      <div className="product-container__detail">
        <h2 className="product-container__image__h2">Descripción del producto</h2>
        <p className="product-container__image__p">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
