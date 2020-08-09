import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "../../assets/sass/components/Header.scss"
import logo from "../../assets/images/Logo_ML.png"
import searchIcon from "../../assets/images/ic_Search.png"

const Header = ({ placeholder }) => {
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
            className="header-container__search__input"
            name="search"
            placeholder={placeholder}
            maxLength="100"
            autoFocus=""
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
            autoComplete="off"
            tabIndex="2"
          />
          <button
            type="submit"
            className="header-container__search__btn"
            tabIndex="3"
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
  )
}

Header.propTypes = {
  placeholder: PropTypes.string,
}

Header.defaultProps = {
  placeholder: "Buscar productos, marcas y más…",
}

export default Header
