import React from 'react';
import { withRouter } from 'react-router';
import '../styles/EncounterDetail.css';
import TokenService from '../services/token-service';
import CharacterEncounterListing from './CharacterEncounterListing';
import Header from './Header';
import config from '../config';

export default withRouter(class EncounterDetail extends React.Component {
  componentDidMount() {
    const eid = this.props.match.params.eid;
    fetch(`${config.API_ENDPOINT}/api/encounter/${eid}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(encounterData => this.props.setEncounterData(encounterData))
      .catch(error => console.log({ error }));
  }

  render() {
    return (
      <section className='encountercontainer'>
        <Header 
          pageName={this.props.encounters.find(e=>e.eid=== +this.props.match.params.eid).encountername}
          history={this.props.history}
        />
        <main className='encounterbody'>
          <p>{this.props.encounters.find(e=>e.eid=== +this.props.match.params.eid).encounterdesc}</p>
          <table className='encountermembers'>
            <tbody>
              <tr>
                <th className='viewLink'></th>
                <th className='name'>Name</th>
                <th className='init'>Init</th>
                <th className='ac'>AC</th>
                <th className='hp'>HP</th>
                <th className='buttons'></th>
              </tr>
              {this.props.encounterData.sort((a,b)=>b.initiative-a.initiative).map((character,i) =>
                <CharacterEncounterListing
                  key={character.pcname+` ${i}`}
                  character={character}
                  updateCharacter={this.props.updateCharacter}
                  setUpdateObject={this.props.setUpdateObject}
                  encounterData={this.props.encounterData}
                  setTargetState={this.props.setTargetState}
                  index={i}
                />
              )}
            </tbody>
          </table>
        </main>
      </section>
    );
  }
});