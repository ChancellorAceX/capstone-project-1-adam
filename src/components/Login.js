import {React} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import '../styles/Login.css';
import Header from './Header';
import config from '../config';

export default withRouter(class Login extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };
  state = { error: null };

  handleLoginSuccess = () => {
    fetch(`${config.API_ENDPOINT}/api/encounter`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(encounters => this.props.setEncounters(encounters))
      .catch(error => console.log({ error }));
    this.props.loggedInToggle(true);
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/encounters';
    history.push(destination);


  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;
    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.handleLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <main className='loginContainer'>
        <Header
          pageName='Log In'
          loggedInToggle={this.props.loggedInToggle}
          history={this.props.history}
        />
        <form className='loginForm' onSubmit={this.handleSubmitJwtAuth}>
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <h2>Log in to see your campaigns!</h2>
          <label htmlFor='username'>Username:</label>
          <input type='text' id='username' placeholder='username' />
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' placeholder='password'></input>
          <button className='loginSubmit' type='submit'>Submit</button>
        </form>
        <p className='login'>New User? <Link to='/register'>Register Here!</Link></p>
        <p>Just curious? Enter username: usera, password: usera, to have a look!</p>
      </main>
    );
  }
});