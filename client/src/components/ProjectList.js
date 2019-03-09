import React, { Component } from 'react'
import ProjectCard from './ProjectCard';

class ProjectList extends Component {
  render() {
    return (
      <div>
        {this.props.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    )
  }
}

export default ProjectList
