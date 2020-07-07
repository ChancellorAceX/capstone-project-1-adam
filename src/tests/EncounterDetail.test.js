import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EncounterDetail from '../components/EncounterDetail';

describe('EncounterDetail component', () => {
  const props = {
    "encounters": [
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 6, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 7, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}"
    ],
    "setEncounterData": "ƒ () {}",
    "encounterData": [
      "{ac: 50, hp: 72, hpmax: 100, initiative: 30, level:…}",
      "{ac: 12, hp: 24, hpmax: 24, initiative: 5, level: n…}",
      "{ac: 12, hp: 15, hpmax: 20, initiative: null, level…}",
      "{ac: 18, hp: 32, hpmax: 32, initiative: null, level…}"
    ],
    "setUpdateObject": "ƒ () {}",
    "updateCharacter": "ƒ () {}",
    "setTargetState": "ƒ () {}",
    "history": {
      "length": 4,
      "action": "PUSH",
      "location": "{hash: \"\", key: \"741myf\", pathname: \"/encounter/1\",…}",
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
      "pathname": "/encounter/1",
      "search": "",
      "hash": "",
      "key": "741myf"
    },
    "match": {
      "path": "/encounter/:eid",
      "url": "/encounter/1",
      "isExact": true,
      "params": "{eid: \"1\"}"
    }
  };

  it('renders the full encounter detail component', () => {
    const wrapper = shallow(<EncounterDetail {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});