import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "../../assets/sass/components/Breadcrumbs.scss"

const BreadCrumbs = ({ categories, delimiter }) => {
  const renderBreadcrumb = (categories, delimiter) => {
    const navigationListLength = categories.length
    return categories.map((element, index) => {
      const { id, name = "Name", url = "/" } = element
      return (
        <React.Fragment key={id}>
          <li className="breadcrumb-container__ol__li">
            <Link to={url}>{name}</Link>
          </li>
          <li className="breadcrumb-container__ol__delimiter">
            {index < navigationListLength - 1 ? delimiter : null}
          </li>
        </React.Fragment>
      )
    })
  }

  return (
    <nav className="grid-container breadcrumb-container" aria-label="breadcrumb">
      <ol className="breadcrumb-container__ol">
        {renderBreadcrumb(categories, delimiter)}
      </ol>
    </nav>
  )
}

BreadCrumbs.propTypes = {
  categories: PropTypes.array.isRequired,
  delimiter: PropTypes.string,
}

BreadCrumbs.defaultProps = {
  delimiter: ">",
}

export default BreadCrumbs
