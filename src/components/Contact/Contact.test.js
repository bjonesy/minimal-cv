import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('Contact', () => {
  let mountedContact;
  beforeEach(() => {
    mountedContact = shallow(
      <Contact email="email@email.com" twitter="https://twitter.com" github="https://github.com" />
    );
  });

  it('renders without crashing', () => {
    shallow(<Contact />);
  });

  it('should render a email link', () => {
    const emailLink = mountedContact.find('.contact-item--email').prop('href');
    expect(emailLink).toEqual('mailto:email@email.com');
  });

  it('should render a twitter link', () => {
    const emailLink = mountedContact.find('.contact-item--twitter').prop('href');
    expect(emailLink).toEqual('https://twitter.com');
  });

  it('should render a github link', () => {
    const emailLink = mountedContact.find('.contact-item--github').prop('href');
    expect(emailLink).toEqual('https://github.com');
  });
});
