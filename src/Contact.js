import React, { Component } from 'react';
import Nav from './Nav';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ul class="list pl0 mt0 measure center">
          <li class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img
              class="w2 h2 w3-ns h3-ns br-100"
              src="https://www.flaticon.com/premium-icon/icons/svg/3128/3128267.svg"
            />
            <div class="pl3 flex-auto">
              {/* <span class="f6 db black-70">Mrmrs</span> */}
              <span class="f6 db black-70">email</span>
            </div>
            <div>
              <a
                href="mailto: brifetterley@gmail.com"
                class="f6 link blue hover-dark-gray"
              >
                brifetterley@gmail.com
              </a>
            </div>
          </li>
          <li class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img
              class="w2 h2 w3-ns h3-ns br-100"
              src="https://image.flaticon.com/icons/svg/2111/2111432.svg"
            />
            <div class="pl3 flex-auto">
              {/* <span class="f6 db black-70">Jxnblk</span> */}
              <span class="f6 db black-70">Github</span>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/bnfetterley"
                class="f6 link blue hover-dark-gray"
              >
                https://github.com/bnfetterley
              </a>
            </div>
          </li>
          <li class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img
              class="w2 h2 w3-ns h3-ns br-100"
              src="https://www.flaticon.com/premium-icon/icons/svg/3015/3015805.svg"
            />
            <div class="pl3 flex-auto">
              {/* <span class="f6 db black-70">Jason Li</span> */}
              <span class="f6 db black-70">LinkedIn</span>
            </div>
            <div>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/bfetterley/"
                class="f6 link blue hover-dark-gray"
              >
                https://www.linkedin.com/in/bfetterley/
              </a>
            </div>
          </li>
          <li class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img
              class="w2 h2 w3-ns h3-ns br-100"
              src="https://www.flaticon.com/premium-icon/icons/svg/2504/2504925.svg"
            />
            <div class="pl3 flex-auto">
              {/* <span class="f6 db black-70">Yavor</span> */}
              <span class="f6 db black-70">Medium</span>
            </div>
            <div>
              <a
                target="_blank"
                href="https://medium.com/@brifetterley"
                class="f6 link blue hover-dark-gray"
              >
                https://medium.com/@brifetterley
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
