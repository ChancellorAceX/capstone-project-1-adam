import React from 'react';
import './EncounterDetail.css';

export default function EncounterDetail(){
  return (
    <section className='encountercontainer'>
      <header className='detailheader'>
        <button className='back'>back button</button>
        <h2>Encounter Title</h2>
        <button className='add to encounter'>add button</button>
      </header>
      <body className='encounterbody'>
        <p>Encounter Description</p>
        <table className='encountermembers'>
          <tr>
            <th>Name</th>
            <th>Initiative</th>
            <th>AC</th>
            <th>HP</th>
          </tr>
          <tr>
            <td>Monster 1</td>
            <td>16</td>
            <td>20</td>
            <td>58/63</td>
          </tr>
          <tr>
            <td>Player 1</td>
            <td>12</td>
            <td>15</td>
            <td>23/28</td>
          </tr>
          <tr>
            <td>Player 2</td>
            <td>10</td>
            <td>22</td>
            <td>19/25</td>
          </tr>
          <tr>
            <td>Monster 2</td>
            <td>15</td>
            <td>13</td>
            <td>30/42</td>
          </tr>
        </table>
      </body>
    </section>
  )
}