import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
// import TokenService from '../services/token-service';
import '../styles/EncounterPage.css';
import Header from './Header';
import Campaign from './Campaign';

export default withRouter(class EncountersPage extends React.Component {
  componentDidMount() {
    this.props.fetchEncounters()
  };

  render() {
    return (
      <section className='container'>
        <Header
          pageName='Encounters'
          history={this.props.history}
        />
        <main className='encounters'>
        <section className='addButtonContainer'>
            <Link to='/new/campaign'><button type='button'>+ Campaign</button></Link>
            <Link to='/new/encounter'><button type='button'>+ Encounter</button></Link>
          </section>
          {this.props.campaigns.map(campaign =>
            <Campaign
              key={campaign[0]}
              campaigns={this.props.campaigns}
              campaign={campaign}
              encountersSource={this.props.encounters}
              encounters={this.props.encounters.filter(encounter => campaign.includes(encounter.title))}
              setTargetState={this.props.setTargetState}
            />)}
        </main>
      </section>
    );
  }
});