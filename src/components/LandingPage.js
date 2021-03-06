import React from 'react';
import '../styles/LandingPage.css';

export default function LandingPage(props) {
  return (
    <div className="landing">
      <header className="landingHeader">
        <h1 className='landingHeader'>Welcome to BattleSource!</h1>
      </header>
      <main className='landing'>
        <p className='landing'>This application has two parts.</p>
        <p className='landing'>The first is the bestiary, in which you can search the bestiary for monsters based on name,type,and CR. Feel free to click the magnifying glass below to try this out!</p>
        <p className='landing'>In the second you can view and manage your own personal campaigns, encounters, and characters. Click the map below to log in! (Clicking the map once logged in will auto-route you to your encounters page)</p>
      </main>
    </div>
  );
}
