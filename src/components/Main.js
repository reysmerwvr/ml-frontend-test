import React, { useContext, useEffect } from "react"
import ProductList from "./ProductList"
import ProductDetail from "./ProductDetail"
import Breadcrumbs from "./common/Breadcrumbs"
import { useParams, useLocation } from "react-router-dom"
import { ProductsContext } from "../contexts/ProductsContext"

const breadcrumbList = [
  {
    title: "Title 1",
    url: "/",
  },
  {
    title: "Title 2",
    url: "/",
  },
]

const renderPage = ({ pathname, search, id, state }) => {
  const { products } = state
  if (search !== "" && pathname === "/items" && !id) {
    return (
      <>
        <Breadcrumbs breadcrumbList={breadcrumbList} />
        <div className="grid-container products-container">
          <div className="products-container__list">
            <ProductList products={products} />
          </div>
        </div>
      </>
    )
  } else if (search === "" && pathname.includes("/items/") && id) {
    return (
      <>
        <Breadcrumbs breadcrumbList={breadcrumbList} />
        <div className="grid-container products-container">
          <div className="products-container__detail">
            <ProductDetail />
          </div>
        </div>
      </>
    )
  }
  return null
}

const Main = () => {
  const { pathname, search } = useLocation();
  const { id } = useParams()
  const [state] = useContext(ProductsContext)
  return renderPage({ pathname, search, id, state })
}

export default Main
