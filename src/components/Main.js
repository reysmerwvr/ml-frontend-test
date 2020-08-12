import React, { useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Breadcrumbs from './common/Breadcrumbs';
import { ProductsContext } from '../contexts/ProductsContext';

const Main = () => {
  const { pathname, search } = useLocation();
  const { id } = useParams();
  const [state] = useContext(ProductsContext);

  const renderContent = ({ pathName, searchText, productId }) => {
    if (searchText !== '' && pathName === '/items' && !productId) {
      return (
        <div className="products-container__list">
          <ProductList />
        </div>
      );
    }
    if (searchText === '' && pathName.includes('/items/') && productId) {
      return (
        <div className="products-container__detail">
          <ProductDetail />
        </div>
      );
    }
    return null;
  };

  const renderNavigation = ({
    pathname: pathName,
    search: searchText,
    id: productId,
    state: globalState,
  }) => {
    const { categories } = globalState;
    const pathNames = ['/items', '/items/'];
    const containsPath = (element) => pathName.includes(element);
    if (pathNames.some(containsPath)) {
      return (
        <>
          <Breadcrumbs categories={categories} />
          <div className="grid-container products-container">
            {renderContent({ pathName, searchText, productId })}
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <main>
      {renderNavigation({
        pathname,
        search,
        id,
        state,
      })}
    </main>
  );
};

export default Main;
