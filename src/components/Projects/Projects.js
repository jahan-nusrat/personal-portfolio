import React, { useEffect } from 'react';
import { projects } from '../../data/data';
import { ProjectContainer } from './projects.style';
import ProjectCard from './ProjectCard';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(()=>{
        Aos.init({duration:2500})
    },[])
    return (
        <ProjectContainer className="container py-5" id="project-container" data-aos="fade-up">
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
