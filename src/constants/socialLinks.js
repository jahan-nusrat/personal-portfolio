import React from "react"
import {
    FaFacebookSquare,
    FaLinkedin,
    FaGithub,
    FaSkype,
    FaTwitterSquare,
} from "react-icons/fa"

const data = [
    {
        id: 1,
        icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
        url: "https://www.facebook.com/nusratjahan.fariya/",
    },
    {
        id: 2,
        icon: <FaLinkedin className="social-icon"></FaLinkedin>,
        url: "https://www.linkedin.com/in/nusrat-jahan-8299151ba/",
    },
    {
        id: 3,
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/jahan-nusrat",
    },
    {
        id: 4,
        icon: <FaSkype className="social-icon"></FaSkype>,
        url: "https://join.skype.com/invite/YCMEpIZMHlDo",
    },
    {
        id: 5,
        icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
        url: "https://www.twitter.com",
    },
]
const links = data.map(link => {
    return (
        <li key={link.id}>
            <a href={link.url} className="social-link">
                {link.icon}
            </a>
        </li>
    )
})

export default ({ styleClass }) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>
            {links}
        </ul>
    )
}