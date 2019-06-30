import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Main from './Main';

describe('Main', () => {
  let mountedMain;
  beforeEach(() => {
    mountedMain = shallow(<Main />);
  });

  it('renders without crashing', () => {
    shallow(<Main />);
  });

  it('calls axios.get in #componentDidMount', () => {
    return mountedMain
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled();
      });
  });

  it('calls axios.get with correct url', () => {
    return mountedMain
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/data.json');
      });
  });

  it('updates state with api data', () => {
    return mountedMain
      .instance()
      .componentDidMount()
      .then(() => {
        expect(mountedMain.state()).toHaveProperty('profile', {
          name: 'Bruce Wayne',
          role: 'Trying to be a good developer'
        });
      });
  });

  it('updates state with api data', () => {
    return mountedMain
      .instance()
      .componentDidMount()
      .then(() => {
        expect(mountedMain.state()).toHaveProperty('information', {
          about: 'About me',
          contact: {
            email: 'brandon.jones1985@gmail.com',
            twitter: 'https://www.twitter.com/BrandonJ0nes',
            github: 'https://github.com/bjonesy'
          }
        });
      });
  });
});
