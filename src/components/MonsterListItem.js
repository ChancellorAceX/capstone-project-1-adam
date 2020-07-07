import React from 'react';
import '../styles/MonsterListItem.css';
import { Link } from 'react-router-dom';
// import ApiContext from './ApiContext';

export default function MonsterListItem(props) {

  return (
    <Link to={`/bestiary/${props.monster.bid}`} style={{ textDecoration: 'none' }}>
      <li className='monsterListing'>
        {/* possibly add an 'add to' button here */}
        <p className='name'>{props.monster.monstername}</p>
        <section className='type'>
          <p className='type'>{props.monster.type.split(', ')[0]}</p>
          <p className='type'>{props.monster.type.split(', ')[1]}</p>
        </section>
        <p className='cr'>CR: {props.monster.cr}</p>
      </li>
    </Link>
  );
}
