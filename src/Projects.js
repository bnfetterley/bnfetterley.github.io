import React, { Component } from 'react';
import Nav from './Nav';
import traveltongue from './images/traveltongue.jpg';
import artcollect from './images/artcollect.jpg';
import NewWindow from 'react-new-window';

export default class Projects extends Component {
  onclicklinks() {
    // console.log('event hit');

    window.open(
      'https://traveltongue-backend.herokuapp.com/',
      'https://traveltongue.netlify.app'
    );
    // window.open('https://traveltongue.netlify.app');

    // <NewWindow url='https://traveltongue.netlify.app'/>
  }
  render() {
    return (
      <div>
        <Nav />
        <section class="mw7 center avenir">
          <h2 class="baskerville fw1 ph3 ph0-l">Projects</h2>
          <article class="bt bb b--black-10">
            {/* <a
              class="db pv4 ph3 ph0-l no-underline black dim"
              target="_blank"
              href="#"
              // href="https://traveltongue.netlify.app"
              // href="https://traveltongue.netlify.app"
              onClick={(e) => this.onclicklinks}
              // onclick="window.open('https://traveltongue-backend.herokuapp.com/');window.open('https://traveltongue.netlify.app')"
            > */}
            <div class="flex flex-column flex-row-ns">
              <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <p></p>
                <img
                  src={traveltongue}
                  class="db"
                  alt="Snapshot photo of a webpage"
                />
              </div>
              <div onClick={this.onclicklinks} class="w-100 w-60-ns pl3-ns">
                <p></p>
                <h1 class="f3 fw1 baskerville mt0 lh-title">TravelTongue</h1>
                <p class="f6 fw5 f5-l lh-copy">
                  TravelTongue is a web app that allows users to discover local
                  dishes from around the world.{' '}
                </p>
                <p>
                  Developed a Rails API with RESTful endpoints for users, dishes
                  and locations
                </p>
                <p class="f6 f5-l lh-copy">
                  Utilized JSON Web Tokens and local storage to store encrypted
                  user information traveltongue.jpgclient-side and bcrypt
                  server-side{' '}
                </p>
                <p class="f6 f5-l lh-copy">
                  Implemented GoogleMaps and World Bank API to render a dynamic
                  world map{' '}
                </p>
                <p class="f6 f5-l lh-copy">
                  Created pop up modals using pure CSS which allow users to add
                  new dishes seamlessly
                </p>
                <p class="f6 f5-l lh-copy">
                  Managed state, props and store in React and Redux for
                  scalability
                </p>
                <p class="f6 fw5 f5-l lh-copy">
                  See it live by running both front and backend below:{' '}
                </p>
                <p>
                  <a target="_blank" href="https://traveltongue.netlify.app">
                    frontend
                  </a>{' '}
                  <a
                    target="_blank"
                    href="https://traveltongue-backend.herokuapp.com/"
                  >
                    backend
                  </a>
                </p>

                {/* <p class="f6 lh-copy mv0">By Robin Darnell</p> */}
              </div>
            </div>
            {/* </a> */}
          </article>
          <article class="bb b--black-10">
            <a class="db pv4 ph3 ph0-l no-underline black dim" href="#0">
              <div class="flex flex-column flex-row-ns">
                <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                  <img
                    src={artcollect}
                    class="db"
                    alt="Photo of a warehouse with stacked shelves."
                  />
                </div>
                <div class="w-100 w-60-ns pl3-ns">
                  <h1 class="f3 fw1 baskerville mt0 lh-title">ArtCollect</h1>
                  <p class="f6 fw5 f5-l lh-copy">
                    artCollect is an app that allows you to discover artworks
                    and share your favorite pieces in your own collection.
                  </p>
                  <p class="f6 f5-l lh-copy">
                    Developed a Rails API with RESTful endpoints for users,
                    artworks and comments
                  </p>
                  <p class="f6 f5-l lh-copy">
                    Utilized JSON Web Tokens and local storage to store
                    encrypted user information client-side and bcrypt
                    server-side
                  </p>
                  <p class="f6 f5-l lh-copy">
                    Built out full-stack Create, Read, Update and Delete actions
                    to give comprehensive functionality
                  </p>
                  <p class="f6 f5-l lh-copy">
                    Implemented the StackGrid CSS library to create a responsive
                    image gallery
                  </p>
                  <p class="f6 f5-l lh-copy">
                    Managed state, props and store in React and Redux for
                    scalability{' '}
                  </p>

                  <p class="f6 fw5 f5-l lh-copy">
                    See it live by running both front and backend below:{' '}
                  </p>
                  <p>
                    <a
                      target="_blank"
                      href="https://artcollect-frontend.netlify.app/"
                    >
                      frontend
                    </a>{' '}
                    <a
                      target="_blank"
                      href="https://artcollect-backend.herokuapp.com/"
                    >
                      backend
                    </a>
                  </p>

                  {/* <p class="f6 lh-copy mv0">By Robin Darnell</p> */}
                </div>
              </div>
            </a>
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
        </section>
      </div>
    );
  }
}
