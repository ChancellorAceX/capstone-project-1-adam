import React from 'react';
import './EncounterPage.css';

export default function EncountersPage(){
  return(
    <section className='container'>
      <header className='detailheader'>
        <button className='back'>back button</button>
        <h2>Encounters</h2>
        <button className='encounter'>add button</button>
      </header>
      <body>
        <section className='campaignheader'>
          <h4 className='name'>Campaign A</h4>
          <p className='expanded'>-</p>
        </section>
        <ul className='name'>
          <li className='location'>
            Location 1
            <ul>
              <li>Sub-location 1</li>
              <li>Sub-location 2</li>
              <li>Sub-location 3</li>
            </ul>
          </li>
          <li className='location'>
            Location 2
            <ul>
                <li>
                  <details>
                    <summary>Sub-location 4</summary>
                    <details>
                      <summary>Encounter A</summary>
                      <p>Encounter A description</p>
                      <button type='button'>Detail view</button>
                    </details>
                    <p>Encounter B</p>
                  </details>
                </li>
                <li>
                <details>
                    <summary>Sub-location 5</summary>
                    <p>Encounter C</p>
                  </details>
                </li>
                <li>
                <details>
                    <summary>Sub-location 6</summary>
                    <p>Encounter D</p>
                    <p>Encounter E</p>
                  </details>
                </li>
            </ul>
          </li>
          <li className='location'>Location 3</li>
        </ul>
        <section className='campaignheader'>
          <h4 className='name'>Campaign B</h4>
          <p className='collapsed'>+</p>
        </section>
        <section className='campaignheader'>
          <h4 className='name'>Campaign C</h4>
          <p className='expanded'>+</p>
        </section>
      </body>
      <footer>

      </footer>
    </section>
  )
}