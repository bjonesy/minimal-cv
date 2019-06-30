import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = props => {
  const { label } = props;

  return (
    <button type="button" className="button">
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: 'Button'
};

Button.propTypes = {
  label: PropTypes.string
};

export default Button;
