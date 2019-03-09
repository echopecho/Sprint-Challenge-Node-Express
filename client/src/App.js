import React, { Component } from 'react';
import axios from "axios";
import ProjectList from './components/ProjectList';
import Project from './components/Project';

import { Route } from 'react-router-dom';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/projects')
      .then(response => {
        this.setState({projects: response.data})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <Route 
          exact path="/" 
          render={props => (
            <ProjectList projects={this.state.projects} />
          )} />

          <Route 
            path="/projects/:id"
            render={props => (
              <Project projects={this.state.projects} {...props} />
            )}
          />
      </div>
    );
  }
}

export default App;
