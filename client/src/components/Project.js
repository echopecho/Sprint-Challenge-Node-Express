import React, { Component } from 'react'
import axios from 'axios';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      actions: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8000/api/projects/${id}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          project: response.data,
          actions: response.data.actions
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h2>{this.state.project.name}</h2>
        <p>{this.state.project.description}</p>
        <ul>
          {this.state.actions.map(action => (
            <li key={action.id}>{action.description}</li>
          ))}
        </ul>
        {/* {this.state.project.actions.description} */}
      </div>
    )
  }
}
