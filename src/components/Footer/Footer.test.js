import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  let mountedFooter;
  let currentYear = new Date().getFullYear();
  beforeEach(() => {
    mountedFooter = shallow(<Footer currentYear={currentYear} />);
  });

  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('it should render the current year', () => {
    const copyRightYear = mountedFooter.find('.footer-copyright').text();
    expect(copyRightYear).toEqual(`${currentYear}`);
  });
});
