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
      <Nav />
      <article class="cf ph3 ph5-ns pv5">
        <header class="fl w-30 pa2">
          <img
            src={headshot}
            class="br-100  ba b--black-10 h4.5-ns w5-ns"
            alt="avatar"
          />
          <p></p>
          <h1 class="mb3 mt0 lh-title">Brianna Fetterley</h1>
          <time class="f6 ttu tracked gray">Web Developer located in NYC</time>
        </header>
        <div class="fl w-70 pa2">
          <p class="lh-copy  mt4 mt0-ns">
            Global explorer turned full stack web developer with a background in
            technical project management, education and travel. Experience
            working on diverse teams in both the US and abroad with a proven
            track record in delivering results and moving projects forward.
            Passionate about making the world more inclusive and accessible.
          </p>
          <p class="lh-copy ">
            Ruby | Ruby on Rails | Active Record | OOP | Node.js | Express | SQL
            | PostgreSQL | JavaScript | React.js | Redux | React Native | HTML |
            CSS
          </p>
        </div>
      </article>

      {/* <article class="vh-100 dt w-100 bg-blue">
        <div class="dtc h-mid">
          <Nav />{' '}
        </div>
        <div class="dtc v-mid tc white ph3 ph4-l">
          <img
            src={headshot}
            class="br-100 pa1 ba b--black-10 h4.5-ns w5-ns"
            alt="avatar"
          />
          <h1 class="f5 f4-ns fw6 dark-gray">
            Brianna Fetterley, Full-Stack Web Developer
          </h1>
          <h2 class="f6 dark-gray fw2 ttu tracked">New York City</h2>

          <h4 class="gold">
            {' '}
            Ruby | Ruby on Rails | Active Record | OOP | Node.js | Express | SQL
            | PostgreSQL | JavaScript | React.js | Redux | React Native | HTML |
            CSS
          </h4>
         
        </div>
      </article> */}
    </div>
  );
}

export default App;
