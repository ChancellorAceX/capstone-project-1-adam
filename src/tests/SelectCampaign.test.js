import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SelectCampaign from '../components/SelectCampaign';

describe('SelectCampaign component', () => {
  const props = {
    "campaign": [
      6,
      "Fillory"
    ]
  };

  it('renders the full new campaign form component', () => {
    const wrapper = shallow(<SelectCampaign {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});