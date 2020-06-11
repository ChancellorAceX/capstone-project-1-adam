import React from 'react';
import './Detail.css';

export default function Detail(){
  return(
    <section className='container'>
      <header className='detailheader'>
        <button className='back'>back button</button>
        <h2>title or app image</h2>
        <button className='add to encounter'>add button</button>
      </header>
      <main className='detailmain'>
        <h1>Young Gold Dragon</h1>
        <p><i>Large dragon, lawful good</i></p>
        <section className='stats'>
          <table className='statscore'>
            <tr>
               <th>Armor Class</th>
               <th>18</th>
               <th>(natural armor)</th>
            </tr>
            <tr>
              <th>Hit Points</th>
              <th>178</th>
              <th>(17d10 + 85)</th>
            </tr>
            <tr>
              <th>Speed</th>
              <th>40ft</th>
              <th>fly 80ft / swim 40ft</th>
            </tr>
            <tr>
              <th>Strength</th>
              <th>23</th>
              <th>+6</th>
            </tr>
            <tr>
              <th>Dexterity</th>
              <th>14</th>
              <th>+2</th>
            </tr>
            <tr>
              <th>Constitution</th>
              <th>21</th>
              <th>+5</th>
            </tr>
            <tr>
              <th>Inteligence</th>
              <th>16</th>
              <th>+3</th>
            </tr>
            <tr>
              <th>Wisdom</th>
              <th>13</th>
              <th>+1</th>
            </tr>
            <tr>
              <th>Charisma</th>
              <th>20</th>
              <th>+5</th>
            </tr>
          </table>
          <table className='statssecondary'>
            <tr>
              <th>Saving Throws</th>
              <th>Dex +6, Con +9, Wis +5, Cha +9</th>
            </tr>
            <tr>
              <th>Skills</th>
              <th>Insight +5, Perception +9, Persuasion +9, Stealth +6</th>
            </tr>
            <tr>
              <th>Damage Immunities</th>
              <th>Fire</th>
            </tr>
            <tr>
              <th>Senses</th>
              <th>blindsight 30ft, darkvision 120ft, passive Perception 19</th>
            </tr>
            <tr>
              <th>Languages</th>
              <th>Common, Draconic</th>
            </tr>
            <tr>
              <th>Challenge 10</th>
              <th>(5900 XP)</th>
            </tr>
            <tr>
              <th>Amphibious</th>
              <th>The dragon can breathe air and water</th>
            </tr>
          </table>
        </section>
        <section className='actions'>
          <h4>Multiattack</h4>
          <p>The dragon makes three attacks: one with its bite and two with its claws.</p>
          <h4>Bite</h4>
          <p>Melee Weapon Attack: +10 to hit, reach 10 ft, one target</p>
          <p>Hit: 17 (2d10 + 6) piercing damage.</p>
          <h4>Claw</h4>
          <p>Melee Weapon Attack: +10 to hit, reach 5ft, one target</p>
          <p>Hit: 13 (2d6 + 6) slashing damage.</p>
          <h4>Breath Weapons (Recharge 5-6)</h4>
          <p>The dragon uses one of the following breath weapons.</p>
          <h4>Fire Breath</h4>
          <p>The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one.</p>
          <h4>Weakening Breath</h4>
          <p>The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.</p>
        </section>
      </main>
      <footer>

      </footer>
    </section>
  )
}