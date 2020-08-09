import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "../../assets/sass/components/Breadcrumbs.scss"

const renderBreadcrumb = (breadcrumbList, delimiter) => {
  const navigationListLength = breadcrumbList.length
  return breadcrumbList.map((element, index) => {
    const { title = "Title", url = "#" } = element
    return (
      <React.Fragment key={index}>
        <li className="breadcrumb-container__ol__li">
          <Link to={url}>{title}</Link>
        </li>
        <li className="breadcrumb-container__ol__delimiter">
          {index < navigationListLength - 1 ? delimiter : null}
        </li>
      </React.Fragment>
    )
  })
}

const BreadCrumbs = ({ breadcrumbList, delimiter }) => {
  return (
    <nav className="grid-container breadcrumb-container" aria-label="breadcrumb">
      <ol className="breadcrumb-container__ol">
        {renderBreadcrumb(breadcrumbList, delimiter)}
      </ol>
    </nav>
  )
}

BreadCrumbs.propTypes = {
  breadcrumbList: PropTypes.array.isRequired,
  delimiter: PropTypes.string,
}

BreadCrumbs.defaultProps = {
  delimiter: ">",
}

export default BreadCrumbs
