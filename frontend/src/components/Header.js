import React from 'react';
import PropTypes from 'prop-types';
import '../styles/header.css'; // Import a CSS file for styling

const Header = ({ title, breadcrumbs }) => {
  return (
    <div className="home1" id="home">
      <div className="header-container-about">
        <div className="breadcrumbs">
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              <a href={breadcrumb.link}>{breadcrumb.text}</a>
              {index < breadcrumbs.length - 1 && ' > '}
            </React.Fragment>
          ))}
        </div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

// Define PropTypes for the component
Header.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
