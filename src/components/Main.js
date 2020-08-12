import React, { useContext } from "react"
import ProductList from "./ProductList"
import ProductDetail from "./ProductDetail"
import Breadcrumbs from "./common/Breadcrumbs"
import { useParams, useLocation } from "react-router-dom"
import { ProductsContext } from "../contexts/ProductsContext"

const Main = () => {
  const { pathname, search } = useLocation()
  const { id } = useParams()
  const [state] = useContext(ProductsContext)

  const renderContent = ({ pathname, search, id }) => {
    if (search !== "" && pathname === "/items" && !id) {
      return (
        <div className="products-container__list">
          <ProductList />
        </div>
      )
    } else if (search === "" && pathname.includes("/items/") && id) {
      return (
        <div className="products-container__detail">
          <ProductDetail />
        </div>
      )
    }
    return null
  }

  const renderNavigation = ({ pathname, search, id, state }) => {
    const { categories } = state
    const pathNames = ["/items", "/items/"]
    const containsPath = (element) => pathname.includes(element)
    if (pathNames.some(containsPath)) {
      return (
        <>
          <Breadcrumbs categories={categories} />
          <div className="grid-container products-container">
            {renderContent({ pathname, search, id })}
          </div>
        </>
      )
    }
    return null
  }

  return renderNavigation({ pathname, search, id, state })
}

export default Main
