import React, { useEffect } from 'react'
import { StyledContainer } from './hero.style'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() =>{
        Aos.init({ duration: 2500})
    },[])
    return (
        <StyledContainer className="container mt-5" data-aos="fade-down">
            <div className="row justify-content-center">
                <div className="col-lg-11 myself">
                    <h1 className="greetings">Hi, my name is</h1>
                    <h2 className="name">Nusrat Jahan.</h2>
                    <h3 className="things mb-0">I build things for the internet.</h3>
                    <p className="info">Nusrat Jahan is a Frontend Web Developer specializing in building (and occasionally designing) exceptional, high-quality websites and applications for web. I have recently graduated from <a target="_blank" rel="noopener noreferrer" style={{color:'#47FFDA',textDecoration:'none'}} href="https://nstu.edu.bd/">Noakhali Science & Technology University</a> with a B.Sc. degree in <span style={{color:'#47FFDA',textDecoration:'none'}}>Information and Communication Engineering</span> .</p>
                </div>
            </div>
        </StyledContainer>
    )
}

export default Hero
