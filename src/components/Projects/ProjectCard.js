import React from 'react';
import {FaGithub,FaExternalLinkAlt} from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ProjectCard = ({project}) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 }, }));
    return (
        <div className="row mt-5 align-items-center projects justify-content-start pl-5">
            <div className="col-lg-6 project-img">
            <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <img style={{height:'287px',width:'516px', objectFit:'cover'}} src={project.img} alt="title" className="img-fluid rounded"/>
            </animated.div>
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
                    <a target="_blank" rel="noopener noreferrer" href={project.github} className="px-2">
                        <FaGithub className="icon" style={{color:'#64ffda', fontSize:'1.4rem'}} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={project.live} className="px-2">
                        <FaExternalLinkAlt className="icon" style={{color:'#64ffda', fontSize:'1.4rem'}} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
