import React from 'react';

export default function SelectCampaign(props) {
  return (
    <option value={props.campaign[0]}>
      {`${props.campaign[1]}`}
    </option>
  );
}