import React from 'react';
import '../styles/Bestiary.css';
import MonsterListItem from './MonsterListItem';
import Footer from './Footer';

export default function Bestiary(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='appHeader'>BattleSource</h1>
        <section className='searchBox'>
          <input className='nameSearch' type='text' placeholder='Name Search' value={props.nameSearch} onChange={props.nameSearchChangeHandle} /> |
          <input className='typeSearch' type='text' placeholder='Type Search' value={props.typeSearch} onChange={props.typeSearchChangeHandle} /> |
          <input className='crSearch' type='number' value={props.crSearch} onChange={props.crSearchChangeHandle} />
        </section>
      </header>
      <main className='bestiary'>
        <ul className='monster'>
          {props.bestiary
            .filter(monster => monster.monstername.toLowerCase().includes(props.nameSearch.toLowerCase()))
            .filter(monster => monster.type.toLowerCase().includes(props.typeSearch.toLowerCase()))
            .filter(monster => monster.cr <= props.crSearch)
            .map(monster => {
              return (
                <MonsterListItem
                  key={`${monster.monstername}`}
                  monster={monster}
                />
              );
            })}
        </ul>
      </main>
      <Footer/>
    </div>
  );
}
