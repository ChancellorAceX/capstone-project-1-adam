import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from '../components/Login';

describe('Login component', () => {
const props = {
  "setEncounters": "ƒ () {}",
  "history": {
    "length": 10,
    "action": "PUSH",
    "location": "{hash: \"\", key: \"y3xvl7\", pathname: \"/login\", searc…}",
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
    "pathname": "/login",
    "search": "",
    "hash": "",
    "key": "y3xvl7"
  },
  "match": {
    "path": "/login",
    "url": "/login",
    "isExact": true,
    "params": "{}"
  }
};

  it('renders the full login component', () => {
    const wrapper = shallow(<Login {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});