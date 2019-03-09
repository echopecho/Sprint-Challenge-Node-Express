import React, { Component } from 'react'
import axios from 'axios';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8000/api/projects/${id}`)
      .then(response => {
        console.log(response.data)
        this.setState({ project: response.data})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        {this.state.project.name}
      </div>
    )
  }
}
