import React from 'react';
import { projects } from '../../data/data';
import { ProjectContainer } from './projects.style';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <ProjectContainer className="container py-5">
            <div className="row">
                <div className="col-lg-6 pl-5">
                    <h3 className="section-title">Projects</h3>
                </div>
            </div>
            {
                projects.map(project=>{
                    return <ProjectCard key={project.id} project={project} />
                })
            }
        </ProjectContainer>
    )
}

export default Projects
