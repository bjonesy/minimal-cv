import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('About', () => {
  let mountedAbout;
  beforeEach(() => {
    mountedAbout = shallow(<About text="This is some text" />);
  });

  it('renders without crashing', () => {
    shallow(<About />);
  });

  it('should equal props text', () => {
    const aboutText = mountedAbout.find('.about-text').text();
    expect(aboutText).toEqual('This is some text');
  });
});
