import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { fetchProducts } from "../../actions"
import "../../assets/sass/components/Header.scss"
import logo from "../../assets/images/Logo_ML.png"
import searchIcon from "../../assets/images/ic_Search.png"
import { ProductsContext } from "../../contexts/ProductsContext"

const Header = () => {
  const [, dispatch] = useContext(ProductsContext)
  const [search, setSearch] = useState("")

  const handleSearch = (event) => {
    event.preventDefault()
    if (search) {
      const queryStringParams = { q: search }
      fetchProducts(queryStringParams, dispatch)
    }
  }

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
  )
}

export default Header
