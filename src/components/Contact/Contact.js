import React from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';

const Contact = props => {
  const { email, twitter, github } = props;
  const emailAddress = `mailto:${email}`;

  return (
    <div className="contact">
      <div className="contact-item">
        Email:{' '}
        <a
          className="contact-item--email"
          href={emailAddress}
          rel="noopener noreferrer"
          target="_blank"
        >
          {email}
        </a>
      </div>
      <div className="contact-item">
        Twitter:{' '}
        <a
          className="contact-item--twitter"
          href={twitter}
          rel="noopener noreferrer"
          target="_blank"
        >
          {twitter}
        </a>
      </div>
      <div className="contact-item">
        GitHub:{' '}
        <a className="contact-item--github" href={github} rel="noopener noreferrer" target="_blank">
          {github}
        </a>
      </div>
    </div>
  );
};

Contact.defaultProps = {
  email: 'brandon.jones1985@gmail.com',
  twitter: 'https://twitter.com',
  github: 'https://github.com'
};

Contact.propTypes = {
  email: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string
};

export default Contact;
