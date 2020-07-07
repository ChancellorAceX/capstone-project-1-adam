import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../components/Header';

describe('Header component', () => {
  const props = {
    "pageName": "Encounters",
    "history": {
      "length": 8,
      "action": "PUSH",
      "location": "{hash: \"\", key: \"bhl6me\", pathname: \"/encounters\", …}",
      "createHref": "ƒ createHref() {}",
      "push": "ƒ push() {}",
      "replace": "ƒ replace() {}",
      "go": "ƒ go() {}",
      "goBack": "ƒ goBack() {}",
      "goForward": "ƒ goForward() {}",
      "block": "ƒ block() {}",
      "listen": "ƒ listen() {}"
    },
    "loggedInToggle": "ƒ () {}"
  };

  it('renders the full header component', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});