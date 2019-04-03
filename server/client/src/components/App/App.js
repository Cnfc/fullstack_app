import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../action/types';

import './App.css';
import Header from '../Header';
import Dashboard from '../Dashboard';
import SurveyNew from '../SurveyNew';
import Landing from '../Landing';


class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter >
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />

        </BrowserRouter>    
      </div>
    );
  }
}

export default connect(null, actions)(App);

