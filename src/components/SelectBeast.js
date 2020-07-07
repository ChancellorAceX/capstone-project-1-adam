import React from 'react';

export default function SelectBeast(props) {
  return (
    <option value={props.monster.bid}>
      {`${props.monster.monstername} CR:${props.monster.cr}`}
    </option>
  );
}