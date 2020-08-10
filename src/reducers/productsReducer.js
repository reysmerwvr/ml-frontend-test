import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
} from '../actions/types';

export const productsReducerInitialState = {
  products: [],
  paging: {},
  loading: false,
  error: null,
  product: {}
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
    case FETCH_PRODUCT:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_ERROR:
    case FETCH_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.results,
        paging: action.payload.paging,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload.product,
      };
    default:
      return state;
  }
};

export default productsReducer;
