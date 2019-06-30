import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

const Avatar = props => {
  const { logo } = props;

  return (
    <div className="avatar">
      <img src={logo} alt="Avatar" />
    </div>
  );
};

Avatar.defaultProps = {
  logo: ''
};

Avatar.propTypes = {
  logo: PropTypes.string
};

export default Avatar;
