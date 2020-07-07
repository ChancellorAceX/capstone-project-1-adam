import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewCampaign from '../components/NewCampaign';

describe('NewCampaign component', () => {
const props = {
  "addCampaign": "",
  "setAddCampaign": "ƒ () {}",
  "addCharacters": [
    "{ac: \"AC\", character: \"Character\", level: \"Level\", …}"
  ],
  "addToAddCharacters": "ƒ () {}",
  "addCharacter": {
    "character": "",
    "pcclass": "",
    "ac": "",
    "level": "",
    "maxhp": ""
  },
  "setAddCharacter": "ƒ () {}",
  "saveCampaign": "ƒ () {}",
  "history": {
    "length": 20,
    "action": "PUSH",
    "location": "{hash: \"\", key: \"m9myf9\", pathname: \"/new/campaign\"…}",
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
    "pathname": "/new/campaign",
    "search": "",
    "hash": "",
    "key": "m9myf9"
  },
  "match": {
    "path": "/new/campaign",
    "url": "/new/campaign",
    "isExact": true,
    "params": "{}"
  }
};

  it('renders the full new campaign form component', () => {
    const wrapper = shallow(<NewCampaign {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});