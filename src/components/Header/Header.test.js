import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Avatar from '../Avatar/Avatar';

describe('Header', () => {
  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow(<Header title="Hello World" subTitle="A subtitle" text="Some text" />);
  });

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('should render the Avatar component', () => {
    const avatarComponent = mountedHeader.find(Avatar);
    expect(avatarComponent.length).toBe(1);
  });

  it('should equal props title', () => {
    const headerTitle = mountedHeader.find('.header-title').text();
    expect(headerTitle).toEqual('Hello World');
  });

  it('should equal props subTitle', () => {
    const headerSubTitle = mountedHeader.find('.header-subtitle').text();
    expect(headerSubTitle).toEqual('A subtitle');
  });

  it('should equal props text', () => {
    const headerText = mountedHeader.find('.header-text').text();
    expect(headerText).toEqual('Some text');
  });
});
