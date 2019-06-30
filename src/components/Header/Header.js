import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import logo from '../../assets/images/avatar.jpg';
import './Header.scss';

const Header = props => {
  const { title, subTitle } = props;

  return (
    <div className="header">
      <div className="header-avatar">
        <Avatar logo={logo} />
      </div>
      <div className="header-info">
        <h1 className="header-title">{title}</h1>
        <h2 className="header-subtitle">{subTitle}</h2>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: 'Hello World',
  subTitle: 'This is a subtitle'
};

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default Header;
