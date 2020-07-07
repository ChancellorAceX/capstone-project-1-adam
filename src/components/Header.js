import React from 'react';
import { withRouter } from 'react-router';
import '../styles/Header.css';
import backButton from '../resources/back-2.png';
// import addButton from '../resources/add-2.png';
import logoutButton from '../resources/logout-3.png';
import TokenService from '../services/token-service';

export default withRouter(class Header extends React.Component {
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
  logoutHandler=(e)=> {
    TokenService.clearAuthToken()
    this.props.loggedInToggle(false)
    const { history } = this.props;
    const destination = '/login';
    history.push(destination);
  }

  render() {
    return (
      <header className='bdheader'>
        <img className='backButton' onClick={this.goBack} src={backButton} alt='Back Button' />
        <h1>{this.props.pageName}</h1>
        <img className='logoutButton' src={logoutButton} alt='Logout Button' onClick={this.logoutHandler} />
      </header>
    );
  }
})