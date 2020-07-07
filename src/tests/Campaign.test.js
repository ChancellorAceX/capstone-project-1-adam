import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Campaign from '../components/Campaign';

describe('Campaign component', () => {
  const props = {
    "campaigns": [
      "[1, \"Azeroth\"]",
      "[6, \"Fillory\"]",
      "[7, \"Grishaverse\"]"
    ],
    "campaign": [
      1,
      "Azeroth"
    ],
    "encountersSource": [
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 6, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 7, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}"
    ],
    "encounters": [
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}"
    ],
    "setTargetState": "ƒ () {}"
  };

  it('renders the full campaign display unit', () => {
    const wrapper = shallow(<Campaign {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});