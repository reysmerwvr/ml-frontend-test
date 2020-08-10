import mlApiInstance from "../api/ml"
import { handleError, getErrorMessage, getQueryString } from "../utils/helpers"
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
} from "./types"
import history from "../utils/history"

export const fetchProducts = async (queryStringParams, dispatch) => {
  let params = queryStringParams || {}
  dispatch({ type: FETCH_PRODUCTS })
  try {
    const response = await mlApiInstance.get("sites/MLA/search", {
      params,
    })
    const {
      data: { paging, results },
    } = response
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: { paging, results } })
    const queryString = getQueryString(params)
    await history.push(`/items?${queryString}`)
  } catch (error) {
    handleError(error)
    const errorMessage = getErrorMessage(error)
    dispatch({ type: FETCH_PRODUCTS_ERROR, payload: errorMessage })
  }
}
