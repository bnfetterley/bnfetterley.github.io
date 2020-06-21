import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
import Nav from './Nav';

ReactDOM.render(
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" exact render={(props) => <App />} />
      <Route path="/portfolio" exact render={(props) => <Projects />} />
      <Route path="/resume" exact render={(props) => <Resume />} />
      <Route path="/contact" exact render={(props) => <Contact />} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
