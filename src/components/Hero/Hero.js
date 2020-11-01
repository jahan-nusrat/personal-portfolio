import React from 'react'
import { StyledContainer } from './hero.style'

const Hero = () => {
    return (
        <StyledContainer className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-11 myself">
                    <h1 className="greetings">Hi, my name is</h1>
                    <h2 className="name">Nusrat Jahan.</h2>
                    <h3 className="things mb-0">I build things for the internet.</h3>
                    <p className="info">Nusrat Jahan is a Frontend Web Developer specializing in building (and occasionally designing) exceptional, high-quality websites and applications for web. Currently working at <a target="_blank" style={{color:'#47FFDA',textDecoration:'none'}} href="https://www.zaubacorp.com/company/APPTIVISM-PRIVATE-LIMITED/U72900RJ2020PTC071106">APPTIVISM Pvt. Ltd.</a> as a ReactJS Developer where she contributes to the SaaS applications for Retail customers by making Components with React, Redux, RxJS etc.</p>
                    <button className="btn px-4 py-3">Get In Touch</button>
                </div>
            </div>
        </StyledContainer>
    )
}

export default Hero
