import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import Bestiary from './components/Bestiary';
import config from './config';
// import PublicOnlyRoute from './Utils/PublicOnlyRoute';
// import PrivateRoute from './Utils/PrivateRoute';
import Login from './components/Login';
import BestiaryDetail from './components/BestiaryDetail';
import NewCampaign from './components/NewCampaign';
import NewEncounter from './components/NewEncounter';
import EncountersPage from './components/EncountersPage';
import EncounterDetail from './components/EncounterDetail';
import TokenService from './services/token-service';
import Registration from './components/Registration';

class App extends React.Component {
  state = {
    bestiary: [],
    nameSearch: '',
    typeSearch: '',
    crSearch: 50,
    campaigns: ['Loading Campaigns...'],
    encounters: [],
    encounterData: [],
    addCampaign: '',
    addCharacter: { character: '', pcclass: '', ac: '', level: '', maxhp: '' },
    addCharacters: [{ character: 'Character', pcclass: 'Class', level: 'Level', ac: 'AC', maxhp: 'Max HP' }],
    addMonster: { monstername: 'Name', initiative: 0, ac: 'AC', hp: '', maxhp: 'Max HP', pcbestiaryid: 'bid' },
    addMonsters: [{ monstername: 'Name', ac: 'AC', hp: '', maxhp: 'Max HP', pcbestiaryid: 'bid', initiative: 0 }],
    addEncounter: { encountername: '', encounterdesc: '', encountercampaignid: 0 },
    updateObject: {},
    error: null
  };

  nameSearchChangeHandle = (e) => this.setState({ nameSearch: e.target.value });
  typeSearchChangeHandle = (e) => this.setState({ typeSearch: e.target.value });
  crSearchChangeHandle = (e) => this.setState({ crSearch: e.target.value });

  setEncounters = (encounters) => this.setState({ encounters });
  setCampaigns = (campaigns) => this.setState({ campaigns });
  setEncounterData = (encounterData) => this.setState({ encounterData });
  setAddCampaign = (e) => this.setState({ addCampaign: e.target.value });
  setAddCharacter = (e) => this.setState({ addCharacter: { ...this.state.addCharacter, [e.target.className]: e.target.value } });
  setAddEncounter = (e) => this.setState({ addEncounter: { ...this.state.addEncounter, [e.target.className]: e.target.value } });
  setUpdateObject = (e) => this.setState({ updateObject: { ...this.state.updateObject, pcid: +e.target.className.split(' ')[1], [e.target.className.split(' ')[0]]: (typeof e.target.value !== 'number' ? e.target.value : +e.target.value) } });

  fetchCampaigns = () => {
    fetch(`${config.API_ENDPOINT}/api/campaign`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(res => this.setCampaigns(res.map(campaign => [campaign.cid, campaign.title])))
      .catch(error => console.log({ error }));
  };

  fetchEncounters = () => {
    this.fetchCampaigns();
    fetch(`${config.API_ENDPOINT}/api/encounter`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(encounters => this.setEncounters(encounters))
      .catch(error => console.log({ error }));
  };

  setTargetState = (targetState, filteredArray) => {
    this.setState({ [targetState]: filteredArray });
  };

  updateCharacter = (e) => {
    e.preventDefault();
    if (!!this.state.updateObject.pcid) {
      fetch(`${config.API_ENDPOINT}/api/character/${this.state.updateObject.pcid}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({ updateObject: { ...this.state.updateObject } })
      })
        .then(res => res.json())
        .then(([res]) => {
          this.setState({
            updateObject: {},
            encounterData: this.state.encounterData.map(character =>
              +character.pcid === +res.pcid ? { ...res } : character
            )
          });
        })
        .catch(error => console.log({ error }));
    }
  };

  calculateHP = (string) => {
    string = string.split(/d|\+/);
    let result = 0;
    result += +string[2] | 0;
    for (let j = +string[0]; j > 0; j--) {
      result += Math.floor(Math.random() * (+string[1] - 1)) + 1;
    }
    return result;
  };
  initiativeRoll = (dexmod) => Math.floor(Math.random() * 19) + 1 + Number(dexmod);

  setAddMonster = (e) => {
    const monster = this.state.bestiary.find(beast => beast.bid === +e.target.value);
    monster.hp = this.calculateHP(monster.maxhp);
    this.setState({ addMonster: { monstername: (monster.monstername), type: monster.monstername, ac: +monster.ac.split(' ')[0], hp: monster.hp, maxhp: monster.hp, initiative: this.initiativeRoll(monster.dexmod), pcbestiaryid: monster.bid } });
  };

  addToAddCharacters = (e) => { e.preventDefault(); this.setState({ addCharacters: [...this.state.addCharacters, this.state.addCharacter] }); };

  addToAddMonsters = (e) => {
    e.preventDefault();
    this.setState({ addMonsters: [...this.state.addMonsters, this.state.addMonster] });
    const Initiative=this.initiativeRoll(this.state.bestiary.find(beast=>beast.bid===this.state.addMonster.pcbestiaryid).dexmod);
    const HP = this.calculateHP(this.state.bestiary.find(beast => beast.bid === this.state.addMonster.pcbestiaryid).maxhp);
    this.setState({ addMonster: { ...this.state.addMonster,initiative:Initiative, hp: HP, maxhp: HP } });
  };

  saveCampaign = (e) => {
    const addCampaign = this.state.addCampaign;
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}/api/campaign`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ title: addCampaign })
    })
      .then(res => res.json())
      .then(res => {
        this.state.addCharacters.slice(1).forEach(character => {
          const { pcclass, level, ac, maxhp } = character;
          const bodyObject = { npc: false, pcclass, level, pcname: character.character, ac, hp: maxhp, hpmax: maxhp, pccampaignid: res.cid };
          fetch(`${config.API_ENDPOINT}/api/character`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(bodyObject)
          })
            .then(result => res += result);
        });
      })
      .then(() => this.setState({ addCampaign: '', addCharacters: [{ character: 'Character', pcclass: 'Class', level: 'Level', ac: 'AC', maxhp: 'Max HP' }] }))
      .catch(error => console.log({ error }));
    this.fetchEncounters();
  };

  saveEncounter = (e) => {
    e.preventDefault();
    const addEncounter = this.state.addEncounter;
    fetch(`${config.API_ENDPOINT}/api/encounter`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ ...addEncounter })
    })
      .then(res => res.json())
      .then(res => {
        this.state.addMonsters.slice(1).forEach(monster => {
          const { monstername, initiative, ac, hp, maxhp, pcbestiaryid } = monster;
          const bodyObject = { npc: true, initiative, pcname: monstername, ac, hp, hpmax: maxhp, pcbestiaryid, pcencounterid: res.eid };
          fetch(`${config.API_ENDPOINT}/api/character`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(bodyObject)
          })
            .then(result => res += result);
        });
      })
      .then(() => this.setState({ addEncounter: { encountername: '', encounterdesc: '', encountercampaignid: 0 }, addMonsters: [{ monstername: 'Name', ac: 'AC', hp: '', maxhp: 'Max HP', pcbestiaryid: 'bid', initiative: 0 }] }))
      .catch(error => console.log({ error }));
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/bestiary`)
      .then(res => res.json())
      .then(bestiary => this.setState({ bestiary }))
      .catch(error => console.log({ error }));
  }

  render() {
    return (
      <main>
        <Route
          path='/'
          render={() => <Footer />}
        />
        <Route
          exact path='/'
          render={() => <Bestiary
            bestiary={this.state.bestiary}
            nameSearch={this.state.nameSearch}
            typeSearch={this.state.typeSearch}
            crSearch={this.state.crSearch}
            nameSearchChangeHandle={this.nameSearchChangeHandle}
            typeSearchChangeHandle={this.typeSearchChangeHandle}
            crSearchChangeHandle={this.crSearchChangeHandle}
          />}
        />
        <Route
          path='/bestiary/:bid'
          render={() => <BestiaryDetail
            bestiary={this.state.bestiary}
            history={this.state.history}
          />}
        />
        <Route path='/login'>
          {TokenService.hasAuthToken() ?
            <Redirect to='/encounters' /> :
            <Login
              setEncounters={this.setEncounters}
              history={this.state.history}
            />}
        </Route>
        <Route path='/register'>
          {TokenService.hasAuthToken() ?
            <Redirect to='/encounters' /> :
            <Registration
              history={this.state.history}
              location={this.state.location}
            />}
        </Route>
        <Route path='/new/campaign'>
          {!TokenService.hasAuthToken() ?
            <Redirect to='/login' /> :
            <NewCampaign
              addCampaign={this.state.addCampaign}
              setAddCampaign={this.setAddCampaign}
              addCharacters={this.state.addCharacters}
              addToAddCharacters={this.addToAddCharacters}
              addCharacter={this.state.addCharacter}
              setAddCharacter={this.setAddCharacter}
              saveCampaign={this.saveCampaign}
              history={this.state.history}
            />}
        </Route>
        <Route path='/new/encounter'>
          {!TokenService.hasAuthToken() ?
            <Redirect to='/login' /> :
            <NewEncounter
              bestiary={this.state.bestiary}
              campaigns={this.state.campaigns}
              addEncounter={this.state.addEncounter}
              setAddEncounter={this.setAddEncounter}
              addMonster={this.state.addMonster}
              addMonsters={this.state.addMonsters}
              addToAddMonsters={this.addToAddMonsters}
              setAddMonster={this.setAddMonster}
              saveEncounter={this.saveEncounter}
              history={this.state.history}
            />}
        </Route>
        <Route path='/encounters'>
          {!TokenService.hasAuthToken() ?
            <Redirect to='/login' /> :
            <EncountersPage
              campaigns={this.state.campaigns}
              encounters={this.state.encounters}
              fetchEncounters={this.fetchEncounters}
              setEncounters={this.setEncounters}
              setCampaigns={this.setCampaigns}
              setTargetState={this.setTargetState}
              history={this.state.history}
            />}
        </Route>
        <Route path='/encounter/:eid'>
          {!TokenService.hasAuthToken() ?
            <Redirect to='/login' /> :
            <EncounterDetail
              encounters={this.state.encounters}
              setEncounterData={this.setEncounterData}
              encounterData={this.state.encounterData}
              setUpdateObject={this.setUpdateObject}
              updateCharacter={this.updateCharacter}
              setTargetState={this.setTargetState}
              history={this.state.history}
            />}
        </Route>
      </main >
    );
  }
};

export default App;
