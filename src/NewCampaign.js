import React from 'react';
import './NewCampaign.css';

export default function NewCampaign(){
  return(
    <section className='container'>
      <h2>New Campaign</h2>
      <form className='newCampaign'>
        <input className='title' placeholder='Campaign Title'/>
        <section className='inputSections'>
          <section className='locations'>
            <input className='locationTitle' placeholder='Location Name'/>
            <label for='locationList'>Nest under:</label>
            <select id='locationList' className='Sub-location'>
              <option>None: Main Location</option>
              <option>Location 1</option>
              <option>Location 2</option>
              <option>Location 3</option>
            </select>
            <button className='addLocation'>+ Location</button>
          </section>
          <section className='players'>
            <input className='playerName' placeholder='Name'/>
            <input classNAme='playerClass' placeholder='Class'/>
            <input className='playerLevel' placeholder='Level'/>
            <button className='addPlayer'>+ Player</button>
          </section>
        </section>
        <button type='submit'>+ Save Campaign</button>
      </form>
      <section className='tableBox'>
        <table className='locations left'>
          <tr>
            <th>
              <h4>Location 1</h4>
            </th>
            <td>
              <ul>
                <li>Sub-location 1</li>
                <li>Sub-location 2</li>
                <li>Sub-location 3</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>
              <h4>Location 2</h4>
            </th>
            <td>
              <ul>
                <li>Sub-location 4</li>
                <li>Sub-location 5</li>
                <li>Sub-location 6</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>
              <h4>Location 3</h4>
            </th>
            <th>
              <ul>

              </ul>
            </th>
          </tr>
        </table>
        <table className='players right'>
          <tr>
            <th>Character</th>
            <th>Class: Level</th>
          </tr>
          <tr>
            <td>Nire</td>
            <td>Druid: 4</td>
          </tr>
          <tr>
            <td>Bert</td>
            <td>Wizard: 4</td>
          </tr>
          <tr>
            <td>Pizzacart</td>
            <td>Paladin: 3</td>
          </tr>
          <tr>
            <td>Xanaphia</td>
            <td>Warlock: 3</td>
          </tr>
        </table>
      </section>
    </section>
  )
}