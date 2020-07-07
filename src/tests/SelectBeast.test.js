import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SelectBeast from '../components/SelectBeast';

describe('SelectBeast component', () => {
  const props = {
    "monster": {
      "bid": 6,
      "monstername": "Animated Armor",
      "type": "Medium construct, unaligned",
      "ac": "18 (natural armor)",
      "maxhp": "6d8 + 6",
      "speed": 25,
      "burrowspeed": null,
      "climbspeed": null,
      "flyspeed": null,
      "swimspeed": null,
      "str": 14,
      "strmod": 2,
      "dex": 11,
      "dexmod": 0,
      "con": 13,
      "conmod": 1,
      "int": 1,
      "intmod": -5,
      "wis": 3,
      "wismod": -4,
      "cha": 1,
      "chamod": -5,
      "savingthrows": null,
      "skills": null,
      "vulnerabilities": null,
      "resistances": null,
      "immunities": "poison, psychic, blinded, charmed deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
      "senses": "Blindsight 60 ft. (blind beyond this radius), passive Perception 6",
      "languages": "None",
      "cr": 1,
      "xp": 200,
      "extras": "[Array(2), Array(2), Array(2)]",
      "actions": "[Array(2), Array(2)]"
    }
  };

  it('renders the full SelectBeast component', () => {
    const wrapper = shallow(<SelectBeast {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});