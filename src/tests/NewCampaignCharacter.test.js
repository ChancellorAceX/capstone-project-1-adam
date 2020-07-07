import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewCampaignCharacter from '../components/NewCampaignCharacter';

describe('NewCampaignCharacter component', () => {
  const props = {
    "character": {
      "character": "name",
      "pcclass": "class",
      "ac": "10",
      "level": "1",
      "maxhp": "14"
    }
  };
  it('renders the full NewCampaignCharacter component', () => {
    const wrapper = shallow(<NewCampaignCharacter {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});