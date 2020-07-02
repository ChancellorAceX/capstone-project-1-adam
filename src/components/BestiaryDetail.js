import React from 'react';
import { withRouter } from 'react-router';
import '../styles/BestiaryDetail.css';
import backButton from '../resources/back-2.png';
// import addButton from '../resources/add-2.png';
import SecondaryTableUnit from './SecondaryTableUnit';
import AbilityScoreTableUnit from './AbilityScoreTableUnit';
import ActionExtras from './ActionsExtras';

export default withRouter(class BestiaryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const bid = this.props.match.params.bid;
    const monster = this.props.bestiary.find(monster => monster.bid === +bid);

    const speedstring = ['Burrow', 'Climb', 'Fly', 'Swim'];
    const speeds = [monster.burrowspeed, monster.climbspeed, monster.flyspeed, monster.swimspeed].map((speed, i) => speed !== null ? speedstring[i] + ' ' + speed + 'ft' : null).filter(speed => speed !== null).join(' / ');

    const abilityScores = [['Strength', 'str', 'strmod'], ['Dexterity', 'dex', 'dexmod'], ['Constitution', 'con', 'conmod'], ['Inteligence', 'int', 'intmod'], ['Wisdom', 'wis', 'wismod'], ['Charisma', 'cha', 'chamod']];

    const secondary = [['Saving Throws', 'savingthrows'], ['Skills', 'skills'], ['Vulnerabilities', 'vulnerabilities'], ['Resistances', 'resistances'], ['Immunities', 'immunities'], ['Senses', 'senses'], ['Languages', 'languages'], ['Challenge Rating', 'cr'], ['Experience', 'xp']];

    return (
      <section className='bestiaryDetail'>
        <header className='bdheader'>
          <img className='backButton' onClick={this.goBack} src={backButton} alt='Back Button' />
          <h2 className='monsterName'>{monster.monstername}</h2>
          <div />
        </header>
        <main className='bdmain'>
          <p><i>{monster.type}</i></p>

          <table className='stats'>
            <tbody className='statscore'>
              <tr>
                <th>Armor Class</th>
                <th>{monster.ac.split(' ')[0]}</th>
                <th>{monster.ac.split(/\s(.+)/)[1]}</th>
              </tr>
              <tr>
                <th>Hit Points</th>
                <th>{(monster.maxhp.split(' + ')[0].split('d').reduce((a, b) => (a*b)/ 2)) + (Number(monster.maxhp.split(' + ')[1])||0)}</th>
                <th>{monster.maxhp}</th>
              </tr>
              <tr>
                <th>Speed</th>
                <th>{monster.speed +
                  'ft'}</th>
                <th>{speeds}</th>
              </tr>
              {abilityScores.map(score =>
                <AbilityScoreTableUnit
                  unit={[score[0], monster[score[1]], (monster[score[1]] > 12 ? '+' : '') + monster[score[2]]]}
                  key={score[0]}
                />
              )}
            </tbody>
          </table><table>
            <tbody className='statssecondary'>
              {secondary.map(unit =>
                monster[unit[1]] === null ? null :
                  <SecondaryTableUnit
                    unit={[unit[0], monster[unit[1]]]}
                    key={unit[0]}
                  />
              )}
            </tbody>
          </table>

          <table className='actions'>
            <tbody>
              {monster.extras === null ? null : monster.extras.map(extra =>
                <ActionExtras
                  key={extra[0]}
                  h={extra[0]}
                  p={extra[1]}
                />
              )}
              {monster.actions === null ? null : monster.actions.map(action =>
                <ActionExtras
                  key={action[0]}
                  h={action[0]}
                  p={action[1]}
                />
              )}
            </tbody>
          </table>
        </main>
      </section>
    );
  }
});