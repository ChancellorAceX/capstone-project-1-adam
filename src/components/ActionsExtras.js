import React from 'react';

export default function ActionExtras(props) {
  return (
    <React.Fragment>
      <tr>
        <th>{props.h}</th>
      </tr>
      <tr>
        <td>{props.p}</td>
      </tr>
    </React.Fragment>
  );
}