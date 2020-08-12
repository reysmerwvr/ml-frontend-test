import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../assets/sass/components/Breadcrumbs.scss';

const BreadCrumbs = ({ categories, delimiter }) => {
  const renderBreadcrumb = (categoryList, delimiterText) => {
    const navigationListLength = categoryList.length;
    return categoryList.map((element, index) => {
      const { id, name = 'Name', url = '/' } = element;
      return (
        <Fragment key={id}>
          <li className="breadcrumb-container__ol__li">
            <Link to={url}>{name}</Link>
          </li>
          <li className="breadcrumb-container__ol__delimiter">
            {index < navigationListLength - 1 ? delimiterText : null}
          </li>
        </Fragment>
      );
    });
  };

  return (
    <nav className="grid-container breadcrumb-container" aria-label="breadcrumb">
      <ol className="breadcrumb-container__ol">
        {renderBreadcrumb(categories, delimiter)}
      </ol>
    </nav>
  );
};

BreadCrumbs.propTypes = {
  categories: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  delimiter: PropTypes.string,
};

BreadCrumbs.defaultProps = {
  delimiter: '>',
};

export default BreadCrumbs;
