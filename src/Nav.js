import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="pa3 pa4-ns">
          {/* <a
            className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
            href="#"
            title="Home"
          >
        
          </a> */}
          <div className="tc pb3">
            <a
              className="link dark-gray f10 fw7 f5-ns dib mr3 hover-orange"
              href="#"
              title="Home"
            >
              Home
            </a>
            <a
              className="link dark-gray f6 fw7 f5-ns dib mr3 hover-orange"
              href="#"
              title="About"
            >
              Portfolio
            </a>
            <a
              className="link dark-gray f6 fw7 f5-ns dib mr3 hover-orange"
              href="#"
              title="Store"
            >
              CV
            </a>
            <a
              className="link dark-gray f6 fw7 f5-ns dib hover-orange"
              href="#"
              title="Contact"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
