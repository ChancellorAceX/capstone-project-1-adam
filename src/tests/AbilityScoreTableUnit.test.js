import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AbilityScoreTableUnit from '../components/AbilityScoreTableUnit';

describe('AbilityScoreTableUnit component', () => {
  const score = ['Strength', 'str', 'strmod'];
  const monster = { str: 17, strmod: 3 };
  it('renders the complete table unit', () => {
    const wrapper = shallow(<AbilityScoreTableUnit
      unit={[score[0], monster[score[1]], (monster[score[1]] > 12 ? '+' : '') + monster[score[2]]]}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});