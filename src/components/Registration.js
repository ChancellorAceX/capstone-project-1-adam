import React from 'react';
import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';
// import AuthApiService from '../services/auth-api-service';
// import TokenService from '../services/token-service';
import '../styles/Registration.css';
import Header from './Header';
import config from '../config';

export default withRouter(class Registration extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };
  state = { error: null };

  setError = (error) => {
    this.setState({ error });
  };

  handleRegistration = (e) => {
    e.preventDefault();
    const { fullname, username, password, nickname } = e.target;
    fetch(`${config.API_ENDPOINT}/api/user`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ fullname: fullname.value, username: username.value, password: password.value.trim(), nickname: nickname.value })
    })
      .then(res => res.json())
      .catch(error => console.log({ error }));
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/login';
    history.push(destination);
  };

  checkPassword = (e) => {
    e.preventDefault();
    const pass = e.target.password.value;
    if (pass.length < 8) { this.setError('Password must be more than 8 characters'); } else if (pass.length > 20) { this.setError('Password must be less than 70 characters'); }
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/.test(pass)) { this.setError('Password must contain 1 upper case, lower case, number, and special character'); }
    else { this.handleRegistration(e); }
  };

  render() {
    const { error } = this.state;
    return (
      <section className='container'>
        <Header
          pageName='Register'
          history={this.props.history}
        />
        <main className='registration'>
          <form className='registration' onSubmit={this.checkPassword}>
            <div role='alert'>
              {error && <p className='red'>{error}</p>}
            </div>
            <h2>Welcome! Make a new account below:</h2>
            <section className='registerInput'>
              <label htmlFor='username'>Username:</label>
              <input type='text' id='username' placeholder='username' required />
            </section>
            <section className='registerInput'>
              <label htmlFor='password'>Password:</label>
              <input type='text' id='password' placeholder='password' required />
            </section>
            <section className='registerInput'>
              <label htmlFor='fullname'>Full Name:</label>
              <input type='text' id='fullname' placeholder='Full Name' required />
            </section>
            <section className='registerInput'>
              <label htmlFor='nickname'>Nickname:</label>
              <input type='text' id='nickname' placeholder='nickname' required />
            </section>
            <button className='registrationSubmit' type='submit'>Submit</button>
          </form>
        </main>
      </section>
    );
  }
});