import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Nav from './Nav';
import headshot from './images/headshot.png';
import Footer from './Footer';
import traveltongue from './images/traveltongue.jpg';
import artcollect from './images/artcollect.jpg';

function App() {
  return (
    <div class="bg-white">
      <Nav />
      <article class="cf ph3 ph5-ns pv5 bg-blue">
        <header class="fl center pa2">
          <img
            src={headshot}
            class="br-100  ba b--black-10 h4.5-ns w5-ns"
            alt="avatar"
          />
          <p></p>
          <h1 class="mb3 mt0 lh-title">Brianna Fetterley</h1>
          <time class="f6 ttu tracked gold">Web Developer located in NYC</time>
        </header>
        <div class="fl center pa2">
          <p class="lh-copy  mt5 mt1-ns">
            Global explorer turned full stack web developer with a background in
            technical project management, education and travel. Experience
            working on diverse teams in both the US and abroad with a proven
            track record in delivering results and moving projects forward.
            Passionate about making the world more inclusive and accessible.
          </p>
          <p class="lh-copy gold">
            Ruby | Ruby on Rails | Active Record | OOP | Node.js | Express | SQL
            | PostgreSQL | JavaScript | React.js | Redux | React Native | HTML |
            CSS
          </p>
        </div>
      </article>

      {/* <article class="bb b--black-10">
            <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0">
              <div class="flex flex-column flex-row-ns">
                <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                  <img
                    src="http://mrmrs.github.io/photos/whale.jpg"
                    class="db"
                    alt="Photo of a whale's tale coming crashing out of the water."
                  />
                </div>
                <div class="w-100 w-60-ns pl3-ns">
                  <h1 class="f3 fw1 baskerville mt0 lh-title">
                    Giant Whale Invests Huge Money to Build a Computer Out of
                    Plankton
                  </h1>
                  <p class="f6 f5-l lh-copy">
                    Whale is the common name for a widely distributed and
                    diverse group of fully aquatic placental marine mammals.
                    They are an informal grouping within the infraorder Cetacea,
                    usually excluding dolphins and porpoises.
                  </p>
                  <p class="f6 lh-copy mv0">By Robin Darnell</p>
                </div>
              </div>
            </a>
          </article> */}
      {/* </section> */}

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
