import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EncounterListItem from '../components/EncounterListItem';

describe('EncounterListItem component', () => {
  const props = {
    "encounter": {
      "eid": 7,
      "encountername": "Green Fields",
      "encounterdesc": "Wolves",
      "encountercampaignid": 7,
      "cid": 7,
      "title": "Grishaverse",
      "created": "2020-07-03T00:23:10.591Z",
      "campaignuserid": 1
    },
    "encounters": [
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 6, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 7, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}",
      "{campaignuserid: 1, cid: 1, created: \"2020-07-03T00…}"
    ],
    "setTargetState": "ƒ () {}"
  };

  it('renders the full listing component', () => {
    const wrapper = shallow(<EncounterListItem {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});