import React, { useEffect } from "react"
import Card from "./common/Card"
import "../assets/sass/components/ProductList.scss"

const renderProducts = (products) => {
  return products.map((product) => {
    const { id, title, thumbnail, price, address } = product
    return (
      <Card
        key={id}
        id={id}
        title={title}
        thumbnail={thumbnail}
        description={title}
        price={price}
        address={address}
        address={address}
        product={product}
      />
    )
  })
}

const ProductList = ({ products }) => {
  return renderProducts(products)
}

export default ProductList
