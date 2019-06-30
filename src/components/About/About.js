import React from 'react';
import PropTypes from 'prop-types';
import './About.scss';

const About = props => {
  const { text } = props;

  return (
    <div className="about">
      <p className="about-text">{text}</p>
    </div>
  );
};

About.defaultProps = {
  text: 'This some text'
};

About.propTypes = {
  text: PropTypes.string
};

export default About;
