import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import NewCampaignCharacter from './NewCampaignCharacter';
import '../styles/NewCampaign.css';

export default withRouter(function NewCampaign(props) {
  return (
    <section className='container'>
      <Header
        pageName='New Campaign'
        history={props.history}
        loggedInToggle={props.loggedInToggle}
      />
      <main className='newCampaign'>
        <form className='newCampaign' onSubmit={props.saveCampaign}>
          <section className='inputSections'>
            <h3 className='characterInputs'>Add Characters</h3>
            <input className='character' type='text' onChange={props.setAddCharacter} placeholder='Name' value={props.addCharacter.character} />
            <input className='pcclass' placeholder='Class' type='text' onChange={props.setAddCharacter} value={props.addCharacter.pcclass} />
            <input className='level' placeholder='Level' type='number' onChange={props.setAddCharacter} value={props.addCharacter.level} />
            <input className='ac' id='ac' placeholder='AC' type='number' onChange={props.setAddCharacter} value={props.addCharacter.ac} />
            <input className='maxhp' placeholder='Max HP' type='number' onChange={props.setAddCharacter} value={props.addCharacter.maxhp} />
            <button className='addPlayer' onClick={props.addToAddCharacters}>+ Player</button>
          </section>
          <section className='tableBox'>
            <table className='players'>
              <tbody>
                {props.addCharacters.map((character, i) =>
                  <NewCampaignCharacter
                    key={`character${i}`}
                    character={character}
                  />
                )}
              </tbody>
            </table>
          </section>
          <section className='Campaign'>
            <input className='title' placeholder='Campaign Title' onChange={props.setAddCampaign} value={props.addCampaign} required />
            <button type='submit'>+ Save Campaign</button>
          </section>
        </form>

      </main>
    </section>
  );
});