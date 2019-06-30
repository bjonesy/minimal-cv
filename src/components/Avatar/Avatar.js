import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Avatar.scss';

const Avatar = props => {
  const { logo } = props;

  return (
    <div className="avatar">
      <Link to="/">
        <img src={logo} alt="Avatar" />
      </Link>
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
