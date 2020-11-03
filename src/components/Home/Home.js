import React from 'react'
import Hero from '../Hero/Hero'
import Nav from '../Nav/Nav';
import styled from 'styled-components'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Others from '../Other-Projects/Others';

const StyledHeader= styled.header`
    position:relative;
`

const Home = () => {
    return (
        <section>
            <StyledHeader>
                <Nav />
                <Hero />
            </StyledHeader>
            <About />
            <Projects />
            <Others />
        </section>
        
    )
}

export default Home
