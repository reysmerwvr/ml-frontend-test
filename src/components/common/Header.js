import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { fetchProducts } from '../../actions';
import '../../assets/sass/components/Header.scss';
import logo from '../../assets/images/Logo_ML.png';
import searchIcon from '../../assets/images/ic_Search.png';
import { ProductsContext } from '../../contexts/ProductsContext';
import { getQueryString } from '../../utils/helpers';

const Header = () => {
  const [, dispatch] = useContext(ProductsContext);
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    if (search) {
      let queryStringParams = { q: search };
      fetchProducts({ queryStringParams, dispatch });
      queryStringParams = getQueryString(queryStringParams);
      history.push(`/items?${queryStringParams}`);
    }
  };

  return (
    <header className="grid-container header-container">
      <div className="header-container__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="header-container__search">
        <form role="search">
          <input
            type="text"
            name="search"
            className="header-container__search__input"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onBlur={handleSearch}
            placeholder="Buscar productos, marcas y más…"
            maxLength="100"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
            autoComplete="off"
          />
          <button
            type="submit"
            className="header-container__search__btn"
            onClick={handleSearch}
          >
            <img
              src={searchIcon}
              className="header-container__search__btn__icon"
              alt="Search-Icon"
            />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
