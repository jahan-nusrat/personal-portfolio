import { Link } from 'gatsby';
import React from 'react';

const data = [
    {
        id: 1,
        text: 'home',
        url: '/'
    },
    {
        id: 2,
        text: 'about',
        url: '/about'
    },
    {
        id: 3,
        text: 'projects',
        url: '/projects'
    },
    {
        id: 4,
        text: 'blog',
        url: '/blog'
    },
    {
        id: 5,
        text: 'contact',
        url: '/contact'
    },
]

const links = data.map(link =>{
    return (
        <li key={link.id}>
            <Link className="nav-link" to={link.url}>{link.id}. {link.text}</Link>
        </li>
    )
})

const PageLinks = ({styleClass}) => {
    return (
        <ul className={`page-links ${styleClass? styleClass : ""}`}>
            {links}
        </ul>
    )
}

export default PageLinks
