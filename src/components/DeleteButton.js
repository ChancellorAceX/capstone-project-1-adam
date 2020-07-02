import React from 'react';
import '../styles/DeleteButton.css';
import TokenService from '../services/token-service';
import config from '../config';

export default class DeleteButton extends React.Component {

  deleteTarget = (e) => {
    const targetObject = { campaign: 'campaigns', encounter: 'encounters', character: 'encounterData' };
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}/api/${this.props.target}/${this.props.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .catch(error => console.log({ error }));

    const targetState = targetObject[this.props.target];

    const filteredArray = this.props[targetState].filter(item => item.pcid !== this.props.id && item[0] !== this.props.id && item.eid !== this.props.id);
    
    this.props.setTargetState(targetState, filteredArray);
  };

  render() {
    return (
      <button className='deleteButton' type='button' onClick={this.deleteTarget}>
        &#128465;
      </button>
    );
  }
}