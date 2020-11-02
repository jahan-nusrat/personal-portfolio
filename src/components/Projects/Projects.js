import React from 'react';
import { projects } from '../../data/data';
import { ProjectContainer } from './projects.style';
import {FaGithub,FaExternalLinkAlt} from 'react-icons/fa'

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
                    return <div className="row mt-5 align-items-center projects justify-content-start pl-5">
                        <div className="col-lg-6 project-img">
                            <img src={project.img} alt="title" className="img-fluid rounded"/>
                        </div>
                        <div className="col-lg-6 info">
                            <div className="title pb-4">
                                <h3>{project.title}</h3>
                            </div>
                            <div className="overview section-description p-3 rounded">
                                <p>{project.overview}</p>
                            </div>
                            <div className="technologies mt-3">
                                <p style={{color: '#E6F1FF', fontSize:'0.9rem'}} className="mb-0">{project.technologies}</p>
                            </div>
                            <div className="social text-right mt-4">
                                <a target="_blank" href={project.github} className="px-2">
                                    <FaGithub className="icon" style={{color:'#64ffda', fontSize:'1.4rem'}} />
                                </a>
                                <a target="_blank" href={project.live} className="px-2">
                                    <FaExternalLinkAlt className="icon" style={{color:'#64ffda', fontSize:'1.4rem'}} />
                                </a>
                            </div>
                        </div>
                    </div>
                })
            }
        </ProjectContainer>
    )
}

export default Projects
