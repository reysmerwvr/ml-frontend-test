import mlApiInstance from '../api/ml';
import {
  handleError,
  getErrorMessage,
  getCategories,
  getAuthorData,
} from '../utils/helpers';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
} from './types';

export const fetchProducts = async ({ queryStringParams, dispatch }) => {
  const params = queryStringParams || {};
  dispatch({ type: FETCH_PRODUCTS });
  try {
    const response = await mlApiInstance.get('sites/MLA/search', {
      params,
    });
    const {
      data: { results, filters },
    } = response;
    const items = results.slice(0, process.env.REACT_APP_API_RESULT_LIMIT);
    const categories = getCategories(filters);
    const [name, lastname] = getAuthorData();
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: { author: { name, lastname }, items, categories },
    });
  } catch (error) {
    handleError(error);
    const errorMessage = getErrorMessage(error);
    dispatch({ type: FETCH_PRODUCTS_ERROR, payload: errorMessage });
  }
};

export const fetchProduct = async ({ id, dispatch }) => {
  dispatch({ type: FETCH_PRODUCT });
  try {
    const getProduct = () => mlApiInstance.get(`items/${id}`);
    const getProductDescription = () => mlApiInstance.get(`items/${id}/description`);
    const [item, description] = await Promise.all([
      getProduct(),
      getProductDescription(),
    ]);
    const [name, lastname] = getAuthorData();
    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: {
        author: { name, lastname },
        item: item.data,
        description: description.data.plain_text,
      },
    });
  } catch (error) {
    handleError(error);
    const errorMessage = getErrorMessage(error);
    dispatch({ type: FETCH_PRODUCT_ERROR, payload: errorMessage });
  }
};
