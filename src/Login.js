import React from 'react';
import './Login.css';

export default function Login(){
  return(
    <section className='container'>
      <form>
        <h2>Application Name</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' placeholder='awesomesauce'/>
        <label for='password'>Password:</label>
        <input type='text' id='password' placeholder='inorite?'></input>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}