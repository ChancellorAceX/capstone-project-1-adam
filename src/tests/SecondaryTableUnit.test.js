import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SecondaryTableUnit from '../components/SecondaryTableUnit';

describe('SecondaryTableUnit component', () => {
const props = {
  "unit": [
    "Resistances",
    "radiant; bludgeoning, piercing, and slashing from nonmagical weapons"
  ]
};

  it('renders the full SecondaryTableUnit component', () => {
    const wrapper = shallow(<SecondaryTableUnit {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});