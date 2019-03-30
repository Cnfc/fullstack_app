import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from '../Header';
import Dashboard from '../Dashboard/Dashboard';
import SurveyNew from '../SurveyNew';
import Landing from '../Landing';



class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter >
        <Route path="/" exact component={Landing} />
        <Route path="/surveys" exact component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
        <Route path="/" component={Landing} />

      </BrowserRouter>    
      </div>
    );
  }
}

export default App;
