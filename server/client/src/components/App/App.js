import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from '../Header';
import Dashboard from '../Dashboard';
import SurveyNew from '../SurveyNew';
import Landing from '../Landing';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter >
        
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />

        </BrowserRouter>    
      </div>
    );
  }
}

export default App;

