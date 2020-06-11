import React from 'react';
import './HomePage.css';

export default function HomePage(){
  return(
    <div className="App">
      <header className="App-header">
        <h1>DnD 5e Bestiary</h1>
        <section>
          <button type='button'>Alphabetical</button>
          <button type='button'>CR</button>
          <button type='button'>Grouped</button>
          <button type='button'>&#9733;</button>
        </section>
      </header>
      <body>
        <section className='typeheader'>
          <h4 className='type'>Type A</h4>
          <p className='expanded'>-</p>
        </section>
        <ul className='type'>
          <li className='monster'>beast 1</li>
          <li className='monster'>beast 2</li>
          <li className='monster'>beast 3</li>
        </ul>
        <section className='typeheader'>
          <h4 className='type'>Type B</h4>
          <p className='collapsed'>+</p>
        </section>
        <section className='typeheader'>
          <h4 className='type'>Type C</h4>
          <p className='expanded'>-</p>
        </section>
        <ul className='type'>
          <li className='monster'>beast 4</li>
          <li className='monster'>beast 5</li>
          <li className='monster'>beast 6</li>
        </ul>
      </body>
      <footer>
        <button type='button'>&#x1F50D;</button>
        <button type='button'>&#9876;</button>
      </footer>
    </div>
  )
}
