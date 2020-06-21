import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Nav from './Nav';

function App() {
  return (
    <div>
      <article class="vh-100 dt w-100 bg-green">
        <div class="dtc v-mid tc white ph3 ph4-l">
          <h1 class="f6 f2-m f-subheadline-l fw6 tc">
            Hi! I'm Bri, a full stack web developer.
          </h1>
          <Nav />
        </div>
      </article>
    </div>
  );
}

export default App;
