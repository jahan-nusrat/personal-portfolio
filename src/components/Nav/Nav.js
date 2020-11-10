import React, { useEffect } from 'react'
import { NavContainer } from './nav.style'
import logo from '../../image/logo.png'
import {Link as Scroll} from 'react-scroll';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <NavContainer className="navbar navbar-expand-lg navbar-light px-5">
  {/* <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className="img-fluid"/></Link> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Scroll className="nav-link" to="about-container" smooth={true} duration={1000}>About</Scroll>
      </li>
      <li className="nav-item">
        <Scroll className="nav-link" to="project-container" smooth={true} duration={1200}>Work</Scroll>
      </li>
      <li className="nav-item">
        <Scroll className="nav-link" to="others-container" smooth={true} duration={1200}>Others</Scroll>
      </li>
     {/*  <li className="nav-item">
        <Link to="/blog" className="nav-link">Blogs</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" target="_blank" rel="noopener noreferrer"  href="https://drive.google.com/file/d/1Lk2uD8SRuFp83IJRNs-UohXKl6ynbz5R/view?usp=sharing">Resume</a>
      </li>
    </ul>
  </div>
</NavContainer>
    )
}

export default Nav
