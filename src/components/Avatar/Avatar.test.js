import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

describe('Avatar', () => {
  let mountedAvatar;
  beforeEach(() => {
    mountedAvatar = shallow(<Avatar logo="images/avatar.jpg" />);
  });

  it('renders without crashing', () => {
    shallow(<Avatar />);
  });

  it('should render a logo', () => {
    const logoImg = mountedAvatar.find('img').prop('src');
    expect(logoImg).toEqual('images/avatar.jpg');
  });
});
