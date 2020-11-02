import React from 'react'
import { StyledContainer } from './about.style'
import me from '../../image/me.png';
import {FaGenderless} from 'react-icons/fa'
import { backend, frontend, tools } from '../../data/data';

const About = () => {
    return (
        <StyledContainer className="container mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 about">
                    <h3>About Me</h3>
                    <div className="description">
                        <p>Hello! I'm Nusrat Jahan, a Frontend Web Developer living in Noakhali, Bangladesh who enjoys building things that live on the internet and people's devices. I develop exceptional web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.</p>
                        <p>Here are a few technologies I've been working with recently:</p>
                    </div>
                    <div className="skills">
                        <h5 className="mt-4" style={{color:'#64ffda', fontSize:'1.2rem'}}>Frontend</h5>
                        <ul className="d-flex flex-wrap pl-0">
                            {
                                frontend.map((list,idx)=>{
                                    return <li className="px-1" key={idx}><FaGenderless style={{color:'#64ffda'}} /> {list}</li>
                                })
                            }
                        </ul>
                        <h5 className="mt-4" style={{color:'#64ffda', fontSize:'1.2rem'}}>Backend</h5>
                        <ul className="d-flex flex-wrap pl-0">
                            {
                                backend.map((list,idx)=>{
                                    return <li className="px-1" key={idx}><FaGenderless style={{color:'#64ffda'}} /> {list}</li>
                                })
                            }
                        </ul>
                        <h5 className="mt-4" style={{color:'#64ffda', fontSize:'1.2rem'}}>Tools</h5>
                        <ul className="d-flex flex-wrap pl-0">
                            {
                                tools.map((list,idx)=>{
                                    return <li className="px-1" key={idx}><FaGenderless style={{color:'#64ffda'}} /> {list}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 text-center mt-5">
                    <a target="_blank" href="https://github.com/jahan-nusrat">
                        <img src={me} alt="me" className="img-fluid picture" />
                    </a>
                </div>
            </div>
        </StyledContainer>
    )
}

export default About
