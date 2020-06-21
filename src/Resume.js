import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import resume from './resume.png';

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Nav />
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1Hp9I1jtazPVf6t7Ec6thldsELQn-x-hyd5iW7B8QEvo/edit?usp=sharing"
          class="menupics"
        >
          <img
            src={resume}
            display="flex"
            // display: block;
            margin-left="50%"
            margin-right="auto"
            width="50%"
            // justify-content="center"
            alt="descriptivetext"
            // width="60%"
            height="60%"
          />
        </a>
      </div>
    );
  }
}
