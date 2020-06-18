import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div>
      <article className="vh-100 dt w-100 bg-green o-40">
        <div className="dtc v-mid tc white ph3 ph4-l">
          <h1 className="f6 f2-m f-subheadline-l fw6 tc">
            Hi! I'm Bri, a full stack web developer.
            <img></img>
            <Nav />
          </h1>
        </div>
      </article>
    </div>
  );
}

export default App;
