import React from "react"
import Breadcrumbs from "./common/Breadcrumbs"
import Card from "./common/Card"
import "../assets/sass/components/ProductList.scss"

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

const ProductList = (props) => {
  return (
    <>
      <Breadcrumbs breadcrumbList={breadcrumbList} />
      <div className="grid-container products-container">
        <div className="products-container__list">
          <Card />
        </div>
      </div>
    </>
  )
}

export default ProductList
