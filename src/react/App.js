import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/case-studies/:id" component={CaseStudy}/>
      </div>
    );
  }
}

export default App;
