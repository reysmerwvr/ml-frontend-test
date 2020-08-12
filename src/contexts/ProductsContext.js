import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';
import { productsReducer, productsReducerInitialState } from '../reducers';

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, productsReducerInitialState);
  return (
    <ProductsContext.Provider value={[state, dispatch]}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
