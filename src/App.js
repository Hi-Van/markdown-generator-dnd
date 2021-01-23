import React from 'react';
import './App.css';
import LandingPage from './sections/landing';

const App = () => {
  return (
    <div className="App">
      <LandingPage />
      <div className='page-holder' id='instructions'/>
    </div>
  );
};

export default App;		
			