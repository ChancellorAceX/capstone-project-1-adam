import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MonsterListItem from '../components/MonsterListItem';

describe('MonsterListItem component', () => {
const props = {
  "monster": {
    "bid": 5,
    "monstername": "Solar",
    "type": "Large celestial, lawful good",
    "ac": "21 (natural armor)",
    "maxhp": "18d10 + 144",
    "speed": 50,
    "burrowspeed": null,
    "climbspeed": null,
    "flyspeed": 150,
    "swimspeed": null,
    "str": 26,
    "strmod": 8,
    "dex": 22,
    "dexmod": 6,
    "con": 26,
    "conmod": 8,
    "int": 25,
    "intmod": 7,
    "wis": 25,
    "wismod": 7,
    "cha": 30,
    "chamod": 10,
    "savingthrows": "Int +14, Wis +14, Cha +17",
    "skills": "Perception +14",
    "vulnerabilities": null,
    "resistances": "radiant; bludgeoning, piercing, and slashing from nonmagical weapons",
    "immunities": "necrotic, poison, charmed, exhaustion, frightened, poisoned",
    "senses": "Truesight 120 ft., passive Perception 24",
    "languages": "all, telepathy 120 ft.",
    "cr": 21,
    "xp": 33000,
    "extras": "[Array(2), Array(2), Array(2), Array(2)]",
    "actions": "[Array(2), Array(2), Array(2), Array(2), Array(2), …]"
  }
};

  it('renders the full listing component', () => {
    const wrapper = shallow(<MonsterListItem {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});