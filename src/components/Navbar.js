import React from 'react'
import PageLinks from '../constants/links'
import { FaAlignRight } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src="" alt=""/>
                    <button className="toggle-btn">
                        <FaAlignRight />
                    </button>
                </div>
                <PageLinks styleClass="nav-links" />
            </div>
        </nav>
    )
}

export default Navbar
