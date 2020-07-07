import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeleteButton from '../components/DeleteButton';

describe('DeleteButton component', () => {
  const props = {
    "target": "character",
    "id": 16,
    "encounterData": [
      "{ac: 50, hp: 72, hpmax: 100, initiative: 30, level:…}",
      "{ac: 12, hp: 24, hpmax: 24, initiative: 5, level: n…}",
      "{ac: 12, hp: 15, hpmax: 20, initiative: null, level…}",
      "{ac: 18, hp: 32, hpmax: 32, initiative: null, level…}"
    ],
    "setTargetState": "ƒ () {}"
  };

  it('renders the full delete button component', () => {
    const wrapper = shallow(<DeleteButton {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});