import React, { useContext, useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import Card from "./common/Card"
import "../assets/sass/components/ProductList.scss"
import { financial } from "../utils/helpers"
import { fetchProducts } from "../actions"
import { ProductsContext } from "../contexts/ProductsContext"

const ProductList = () => {
  const [state, dispatch] = useContext(ProductsContext)
  const { search } = useLocation()
  const history = useHistory()
  const { items } = state

  useEffect(() => {
    if (items && dispatch && items.length <= 0) {
      const urlParams = new URLSearchParams(search)
      let queryStringParams = {}
      for (const [key, value] of urlParams) {
        queryStringParams[key === "search" ? "q" : key] = value
      }
      fetchProducts({ queryStringParams, dispatch })
    }
  }, [search, dispatch, items])

  const handleClick = (id) => {
    history.push(`/items/${id}`)
  }

  return items.map((product) => {
    const { id, title, thumbnail, price, address, shipping } = product
    return (
      <Card
        key={id}
        id={id}
        title={title}
        thumbnail={thumbnail}
        description={title}
        price={financial(price, 2)}
        address={address}
        shipping={shipping}
        product={product}
        handleClick={handleClick}
      />
    )
  })
}

export default ProductList
