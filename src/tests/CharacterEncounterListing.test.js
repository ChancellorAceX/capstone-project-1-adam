import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CharacterEncounterListing from '../components/CharacterEncounterListing';

describe('CharacterEncounterListing component', () => {
  const props = {
    "character": {
      "pcid": 16,
      "pcname": "Aarakocra1",
      "pcclass": null,
      "level": null,
      "initiative": 5,
      "ac": 12,
      "hp": 24,
      "hpmax": 24,
      "pcbestiaryid": 1,
      "npc": true,
      "pccampaignid": null,
      "pcencounterid": 1
    },
    "updateCharacter": "ƒ () {}",
    "setUpdateObject": "ƒ () {}",
    "encounterData": [
      "{ac: 50, hp: 72, hpmax: 100, initiative: 30, level:…}",
      "{ac: 12, hp: 24, hpmax: 24, initiative: 5, level: n…}",
      "{ac: 12, hp: 15, hpmax: 20, initiative: null, level…}",
      "{ac: 18, hp: 32, hpmax: 32, initiative: null, level…}"
    ],
    "setTargetState": "ƒ () {}",
    "index": 1
  };

  it('renders the full listing component', () => {
    const wrapper = shallow(<CharacterEncounterListing {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});