import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ActionsExtras from '../components/ActionsExtras';

describe('ActionsExtras component', () => {
  const score=['Strength', 'str', 'strmod']
  const monster={str:17,strmod:3}
  it('renders the complete table unit', () => {
    const wrapper = shallow(<ActionsExtras 
      h={'Heated Body'}
      p={'A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes (1d10) fire damage.'}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});