import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewEncounter from '../components/NewEncounter';

describe('NewEncounter component', () => {
const props = {
  "bestiary": [
    "{ac: \"12\", actions: Array(1), bid: 1, burrowspeed: …}",
    "{ac: \"17 (natural armor)\", actions: Array(5), bid: …}",
    "{ac: \"18 (natural armor)\", actions: Array(2), bid: …}",
    "{ac: \"14 (natural armor), 11 while prone\", actions:…}",
    "{ac: \"17 (natural armor, shield)\", actions: Array(1…}",
    "{ac: \"17 (natural armor)\", actions: Array(4), bid: …}",
    "{ac: \"17 (natural armor)\", actions: Array(1), bid: …}",
    "{ac: \"19 (natural armor)\", actions: Array(3), bid: …}",
    "{ac: \"12\", actions: Array(1), bid: 8, burrowspeed: …}",
    "{ac: \"21 (natural armor)\", actions: Array(6), bid: …}"
  ],
  "campaigns": [
    "[1, \"Azeroth\"]",
    "[6, \"Fillory\"]",
    "[7, \"Grishaverse\"]"
  ],
  "addEncounter": {
    "encountername": "",
    "encounterdesc": "",
    "encountercampaignid": 0
  },
  "setAddEncounter": "ƒ () {}",
  "addMonster": {
    "monstername": "Name",
    "initiative": 0,
    "ac": "AC",
    "hp": "",
    "maxhp": "Max HP",
    "pcbestiaryid": "bid"
  },
  "addMonsters": [
    "{ac: \"AC\", hp: \"\", initiative: 0, maxhp: \"Max HP\", …}"
  ],
  "addToAddMonsters": "ƒ () {}",
  "setAddMonster": "ƒ () {}",
  "saveEncounter": "ƒ () {}",
  "history": {
    "length": 20,
    "action": "PUSH",
    "location": "{hash: \"\", key: \"nj3xjv\", pathname: \"/new/encounter…}",
    "createHref": "ƒ createHref() {}",
    "push": "ƒ push() {}",
    "replace": "ƒ replace() {}",
    "go": "ƒ go() {}",
    "goBack": "ƒ goBack() {}",
    "goForward": "ƒ goForward() {}",
    "block": "ƒ block() {}",
    "listen": "ƒ listen() {}"
  },
  "loggedInToggle": "ƒ () {}",
  "location": {
    "pathname": "/new/encounter",
    "search": "",
    "hash": "",
    "key": "nj3xjv"
  },
  "match": {
    "path": "/new/encounter",
    "url": "/new/encounter",
    "isExact": true,
    "params": "{}"
  }
};

  it('renders the full NewEncounter component', () => {
    const wrapper = shallow(<NewEncounter {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});