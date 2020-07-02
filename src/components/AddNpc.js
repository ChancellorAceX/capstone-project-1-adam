import React from 'react';

export default function AddNpc(props) {
  //requires bestiary
  return (
    <section>
      <select className='type' defaultValue={0}>
        <option disabled value={0}>Select Monster</option>
        {this.props.bestiary.map(monster =>
          <SelectBeast
            key={`Monster ${monster.bid}`}
            monster={monster}
          />
        )}
      </select>
      <button type='button' onClick={(e)=>{this.props.setAddMonster(e);this.props.addToAddMonsters(e);this.props.AddMonsters}}>+ Add Monster</button>
    </section>
  );
}