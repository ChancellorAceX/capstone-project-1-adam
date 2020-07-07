import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Registration from '../components/Registration';

describe('Registration component', () => {
const props = {
  "loggedInToggle": "ƒ () {}",
  "history": {
    "length": 4,
    "action": "PUSH",
    "location": "{hash: \"\", key: \"3gtzq2\", pathname: \"/register\", se…}",
    "createHref": "ƒ createHref() {}",
    "push": "ƒ push() {}",
    "replace": "ƒ replace() {}",
    "go": "ƒ go() {}",
    "goBack": "ƒ goBack() {}",
    "goForward": "ƒ goForward() {}",
    "block": "ƒ block() {}",
    "listen": "ƒ listen() {}"
  },
  "location": {
    "pathname": "/register",
    "search": "",
    "hash": "",
    "key": "3gtzq2"
  },
  "match": {
    "path": "/register",
    "url": "/register",
    "isExact": true,
    "params": "{}"
  }
};

  it('renders the full Registration component', () => {
    const wrapper = shallow(<Registration {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});