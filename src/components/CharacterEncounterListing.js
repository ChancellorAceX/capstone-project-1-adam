import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

export default class CharacterEncounterListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }
  toggleEdit = (e) => this.setState({ editing: !this.state.editing });
  saveChanges;

  render() {
    const { pcid, pcname, initiative, ac, hp, hpmax, pcbestiaryid } = this.props.character;
    return !this.state.editing ? !!pcbestiaryid ?
      (
        <tr>
          <td className='viewLink'><Link className='viewLink' to={`/bestiary/${pcbestiaryid}`}><button className='viewLink'>View</button></Link></td>
          <td className='name'>{pcname}</td>
          <td className='init'>{initiative}</td>
          <td className='ac'>{ac}</td>
          <td className='hp'>{`${hp}/${hpmax}`}</td>
          <td className='buttons'><button className='editButton' onClick={this.toggleEdit} type='button'>Edit</button>
          <DeleteButton
            target='character'
            id={this.props.character.pcid}
            encounterData={this.props.encounterData}
            setTargetState={this.props.setTargetState}
          /></td>
        </tr >
      )
      :
      (
        <tr>
          <td className='viewLink'></td>
          <td className='name'>{pcname}</td>
          <td className='init'>{initiative}</td>
          <td className='ac'>{ac}</td>
          <td className='hp'>{`${hp}/${hpmax}`}</td>
          <td className='buttons'><button className='editButton' onClick={this.toggleEdit} type='button'>Edit</button>
          <DeleteButton
            target='character'
            id={this.props.character.pcid}
            encounterData={this.props.encounterData}
            setTargetState={this.props.setTargetState}
          /></td>
        </tr >
      )
      :
      (
        <tr>
          <td className='viewLink'></td>
          <td id='editname' className='pcname'>
            <textarea className={`pcname ${pcid}`} type='text' defaultValue={pcname} onChange={this.props.setUpdateObject} />
          </td>
          <td id='editinit' className='initiative'>
            <input className={`initiative ${pcid}`} type='number' defaultValue={initiative} onChange={this.props.setUpdateObject} />
          </td>
          <td id='editac' className='ac'>
            <input className={`ac ${pcid}`} type='number' defaultValue={ac} onChange={this.props.setUpdateObject} />
          </td>
          <td id='edithp' className='hp'>
            <input className={`hp ${pcid}`} type='number' defaultValue={hp} onChange={this.props.setUpdateObject} />
            /
            <input className={`hpmax ${pcid}`} type='number' defaultValue={hpmax} onChange={this.props.setUpdateObject} />
          </td>
          <td id='editbuttons' className='buttons'>
            <button className='saveEdit' onClick={(e) => { this.toggleEdit(e); this.props.updateCharacter(e); }} type='button'>Save
            </button>
          </td>
        </tr>
      );
  }
}