import React from 'react';

export default function NewCampaignCharacter(props) {
  const { character, monstername, pcclass, level, ac, maxhp } = props.character;

  return (
    <tr>
      <th>{!character ? monstername + ' ' + (props.index > 0 ? props.index : '') : character}</th>
      <th>{!pcclass ? monstername === 'Name' ? 'Type' : monstername : `${pcclass}: ${level}`}</th>
      <th>{ac}</th>
      <th>{maxhp}</th>
    </tr>
  );
}