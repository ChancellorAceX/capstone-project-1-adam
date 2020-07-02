import React from 'react';

export default function AbilityScoreTableUnit(props) {
  return (
    <tr>
      <th>{props.unit[0]}</th>
      <th>{props.unit[1]}</th>
      <th>{props.unit[2]}</th>
    </tr>
  )
}