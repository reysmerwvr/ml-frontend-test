export const defaultErrorMessage = "Oops! Something went wrong"

export const handleError = (error) => {
  if (error !== undefined) {
    if (error.response) {
      if (error.response.status < 500) {
        if (error.response.data) {
          const errorMessage = error.response.data.message
          console.log(errorMessage)
        }
      }
    } else {
      console.log(error)
    }
  }
}

export const getErrorMessage = (error) => {
  let errorMessage = defaultErrorMessage
  if (error !== undefined) {
    const errorResponse = error.response ? error.response.data : null
    if (errorResponse) {
      errorMessage = errorResponse.message
    }
  }
  return errorMessage
}

export const getQueryString = (params) => {
  let paramsQueryString = ""
  if (typeof params === "object" && Object.keys(params).length > 0) {
    const paramsObject = { search: params.q, ...params }
    delete paramsObject.q
    paramsQueryString = Object.keys(paramsObject)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`
      )
      .join("&")
  }
  return paramsQueryString
}
