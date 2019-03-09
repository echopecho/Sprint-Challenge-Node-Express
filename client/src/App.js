import React, { Component } from 'react';
import axios from "axios";


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
        {this.state.projects.map(project => (
          <div key={project.id}>{project.name}</div>
        ))}
      </div>
    );
  }
}

export default App;
