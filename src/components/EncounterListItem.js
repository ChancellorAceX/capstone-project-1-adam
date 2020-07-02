import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

export default function EncounterListItem(props) {
  return (
    <Link to={`/encounter/${props.encounter.eid}`}>
      <li className='encounterListing'>
        {props.encounter.encountername}
        <DeleteButton
          target='encounter'
          id={props.encounter.eid}
          encounters={props.encounters}
          setTargetState={props.setTargetState}
        />
      </li>
    </Link>
  );
}