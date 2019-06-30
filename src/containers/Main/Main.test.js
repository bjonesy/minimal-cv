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
});
