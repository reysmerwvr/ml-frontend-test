import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
} from '../actions/types';

export const productsReducerInitialState = {
  author: {},
  items: [],
  categories: [],
  loading: false,
  error: null,
  item: {},
  description: {}
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
        items: action.payload.items,
        author: action.payload.author,
        categories: action.payload.categories,
        loading: false,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        item: action.payload.item,
        author: action.payload.author,
        description: action.payload.description,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
