import React from 'react';
import EncounterListItem from './EncounterListItem';
import DeleteButton from './DeleteButton';

export default function Campaign(props) {
  return (
    <section className='campaignListing'>
      <h4 className='campaignTitle'>{props.campaign[1]}
        <DeleteButton
          target='campaign'
          id={+props.campaign[0]}
          campaigns={props.campaigns}
          setTargetState={props.setTargetState}
        />
      </h4>
      <ul className='campaignListing'>
        {props.encounters.map(encounter =>
          <EncounterListItem
            key={encounter.eid}
            encounter={encounter}
            encounters={props.encountersSource}
            setTargetState={props.setTargetState}
          />)}
      </ul>
    </section>
  );
}