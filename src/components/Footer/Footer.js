import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = props => {
  const { currentYear } = props;

  return (
    <div className="footer">
      &copy; <span className="footer-copyright">{currentYear}</span>
    </div>
  );
};

Footer.defaultProps = {
  currentYear: new Date().getFullYear()
};

Footer.propTypes = {
  currentYear: PropTypes.number
};

export default Footer;
