import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EncountersPage from '../components/EncountersPage';

describe('EncountersPage component', () => {
  const props = {
    "campaigns": [
      "[1, \"Azeroth\"]",
      "[6, \"Fillory\"]",
      "[7, \"Grishaverse\"]"
    ],
    "encounters": [
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 6, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 7, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}"
    ],
    "fetchEncounters": "ƒ () {}",
    "setEncounters": "ƒ () {}",
    "setCampaigns": "ƒ () {}",
    "setTargetState": "ƒ () {}",
    "loggedInToggle": "ƒ () {}"
  };

  it('renders the full encounters page component', () => {
    const wrapper = shallow(<EncountersPage {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});