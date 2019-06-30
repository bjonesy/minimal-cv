import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  let mountedButton;
  beforeEach(() => {
    mountedButton = shallow(<Button label="Button" />);
  });

  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('renders a button', () => {
    const button = mountedButton.find('button');
    expect(button.length).toBe(1);
  });

  it('should equal props label', () => {
    const buttonLabel = mountedButton.find('.button').text();
    expect(buttonLabel).toEqual('Button');
  });
});
