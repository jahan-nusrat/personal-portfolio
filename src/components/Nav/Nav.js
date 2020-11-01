import React from 'react'
import { Link } from 'react-router-dom'
import { NavContainer } from './nav.style'
import logo from '../../image/logo.png'

const Nav = () => {
    return (
        <NavContainer className="navbar navbar-expand-lg navbar-light px-5">
  <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className="img-fluid"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Resume</a>
      </li>
    </ul>
  </div>
</NavContainer>
    )
}

export default Nav
