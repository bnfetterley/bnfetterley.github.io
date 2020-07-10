import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Nav from './Nav';
import headshot from './images/headshot.png';
import Footer from './Footer';

function App() {
  return (
    <div>
      <article class="vh-100 dt w-100 bg-green">
        <div class="dtc v-mid tc white ph3 ph4-l">
          <h1 class="f6 f2-m f-subheadline-l fw6 tc">
            Hi! I'm Bri, a full stack web developer.
          </h1>
          {/* <header class="tc pv4 pv5-ns"> */}
          <img
            src={headshot}
            class="br-100 pa1 ba b--black-10 h4.5-ns w5-ns"
            alt="avatar"
          />
          <h1 class="f5 f4-ns fw6 mid-gray">Brianna Fetterley</h1>
          <h2 class="f6 gray fw2 ttu tracked">New York City</h2>
          {/* </header> */}
          <Nav />
        </div>
      </article>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
