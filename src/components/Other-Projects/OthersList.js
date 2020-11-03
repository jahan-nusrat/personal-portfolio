import React from 'react';
import {FaFolderOpen} from 'react-icons/fa';
import {FaGithub,FaExternalLinkAlt} from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const OthersList = ({project}) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 }, }));
    return (
        <div className="col-lg-4" style={{marginTop:'4rem'}}>
            <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
            <div className="projects-card py-4 px-4">
                <div className="top d-flex justify-content-between align-items-center mb-4">
                    <FaFolderOpen className="openFolder" />
                    <div className="social-icon d-flex">
                        <a className="px-2" target="_blank" rel="noopener noreferrer"href={project.github}><FaGithub className="icon" /></a>
                        <a className="px-2" target="_blank" rel="noopener noreferrer"href={project.live}><FaExternalLinkAlt className="icon" /></a>
                    </div>
                </div>
                <div className="card-details">
                    <h5 className="pb-3">{project.title}</h5>
                    <p>{project.overview}</p>
                </div>
                <div className="bottom">
                    <p>{project.technologies}</p>
                </div>
            </div>
            </animated.div>
        </div>
    )
}

export default OthersList
