import React from 'react';
import {Route} from 'react-router-dom';
//import './App.css';
import HomePage from './HomePage';
import Login from './Login';
import Detail from './Detail';
import NewCampaign from './NewCampaign';
import EncountersPage from './EncountersPage';
import EncounterDetail from './EncounterDetail';

class App extends React.Component {
  render(){
    return (
      <main>
        <Route 
          exact path='/'
          render={()=><HomePage />}
        />
        <Route 
          path='/login' 
          render={()=><Login />} 
        />
        <Route
          path='/detail'
          render={()=><Detail />}
        />
        <Route 
          path='/new'
          render={()=><NewCampaign/>}
        />
        <Route
          path='/encounters'
          render={()=><EncountersPage/>}
        />
        <Route 
          path='/encounter/:id'
          render={()=><EncounterDetail/>}
        />
      </main>
    )
  }
}

export default App;
