import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="pa3 pa4-ns">
          <div className="tc pb3">
            <Link to="/">
              <a
                className="link dark-gray f10 fw7 f5-ns dib mr3 hover-orange"
                ref="#"
                title="Home"
              >
                Home
              </a>
            </Link>

            <Link to="/portfolio">
              <a
                className="link dark-gray f6 fw7 f5-ns dib mr3 hover-orange"
                href="#"
                title="About"
              >
                Portfolio
              </a>
            </Link>

            <Link to="/resume">
              <a
                className="link dark-gray f6 fw7 f5-ns dib mr3 hover-orange"
                href="#"
                title="Store"
              >
                Resume
              </a>
            </Link>

            <Link to="/contact">
              <a
                className="link dark-gray f6 fw7 f5-ns dib hover-orange"
                href="#"
                title="Contact"
              >
                Contact
              </a>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
