import React from 'react';
import { withRouter } from 'react-router';
import NewCampaignCharacter from './NewCampaignCharacter';
import Header from './Header';
import '../styles/NewEncounter.css';
import SelectBeast from './SelectBeast';
import SelectCampaign from './SelectCampaign';

export default withRouter(class NewEncounter extends React.Component {
  render() {
    return (
      <section className='container'>
        <Header
          pageName='New Encounter'
          history={this.props.history}
        />
        <form className='newEncounter' onSubmit={this.props.saveEncounter}>
          <section className='encounterInfo'>
            <section className='labelFieldGroup'><label htmlFor='ename'>Name:</label>
              <input id='ename' className='encountername' placeholder='Encounter Name' onChange={this.props.setAddEncounter} value={this.props.addEncounter.encountername} required /></section>
            <section className='labelFieldGroup'><label htmlFor='edesc'>Description:</label>
              <textarea id='edesc' className='encounterdesc' placeholder='Encounter Description' onChange={this.props.setAddEncounter} value={this.props.addEncounter.encounterdesc} required /></section>
            <section className='labelFieldGroup'><label htmlFor='ecid'>Campaign:</label>
              <select id='ecid' className='encountercampaignid' placeholder='Associated Campaign' onChange={this.props.setAddEncounter} value={this.props.addEncounter.encountercampaignid}>
                <option disabled value={0}>Select Campaign</option>
                {this.props.campaigns.map(campaign =>
                  <SelectCampaign
                    key={`Campaign ${campaign[0]}`}
                    campaign={campaign}
                  />
                )}
              </select>
            </section>
          </section>
          <section className='addMonster' onChange={this.props.setAddMonster}>
            <select className='type' defaultValue={0}>
              <option disabled value={0}>Select Monster</option>
              {this.props.bestiary.map(monster =>
                <SelectBeast
                  key={`Monster ${monster.bid}`}
                  monster={monster}
                />
              )}
            </select>
            <button type='button' onClick={this.props.addToAddMonsters}>+ Add Monster</button>
          </section>
          <section className='tableBox'>
            <table className='addMonsters'>
              <tbody>
                {this.props.addMonsters.map((monster, i) =>
                  <NewCampaignCharacter
                    key={`NewMonster${i}`}
                    index={i}
                    character={monster}
                  />
                )}
              </tbody>
            </table>
          </section>
          <section className='buttonContainer'>
            <button className='encounterSave' type='submit'>+ Save Encounter</button>
          </section>
        </form>
      </section>
    );
  }
});