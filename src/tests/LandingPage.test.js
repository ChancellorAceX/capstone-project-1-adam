import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingPage from '../components/LandingPage';

describe('LandingPage component', () => {
  it('renders the full login component', () => {
    const wrapper = shallow(<LandingPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});