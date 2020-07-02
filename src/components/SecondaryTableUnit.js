import React from 'react';

export default function SecondaryTableUnit(props) {
  return (
    <tr>
      <th>{props.unit[0]}</th>
      <th>{props.unit[1]}</th>
    </tr>
  )
}