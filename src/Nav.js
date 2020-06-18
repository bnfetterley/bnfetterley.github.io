import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="pa3 pa4-ns">
          <a
            className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
            href="#"
            title="Home"
          >
            Bri Fetterley
          </a>
          <div className="tc pb3">
            <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">
              Home
            </a>
            <a
              className="link dim gray f6 f5-ns dib mr3"
              href="#"
              title="About"
            >
              Portfolio
            </a>
            <a
              className="link dim gray f6 f5-ns dib mr3"
              href="#"
              title="Store"
            >
              CV
            </a>
            <a className="link dim gray f6 f5-ns dib" href="#" title="Contact">
              Contact
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
