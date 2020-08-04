import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import resume from './resume.png';

export default class Resume extends Component {
  render() {
    return (
      <div class="  v-mid  ph6-ns ">
        <Nav />
        <a
          target="_blank"
          href="https://drive.google.com/file/d/18ubRPn8GMaDUWBi_Tl5BZcAywGxINfce/view?usp=sharing"
          class="menupics"
        >
          <img
            // class="dtc"
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
