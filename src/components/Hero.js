import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SocialLink from "../constants/socialLinks"
import Image from "gatsby-image"

const query= graphql`
    {
        file(relativePath: {eq: "me.png"}) {
            root: childImageSharp {
                fluid (maxWidth:200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const Hero = () => {
    const {file:{root:{fluid}}} = useStaticQuery(query)
    return (
        <header className="hero">
            <div className="section-center hero-center">
                <article className="hero-info">
                    <div>
                        <div className="underline"></div>
                        <h4>Hi, my name is</h4>
                        <h1>Nusrat Jahan.</h1>
                        <h2>I build things for the internet.</h2>
                        <p>Nusrat Jahan is a Frontend Developer specializing in building (and occasionally designing) exceptional, high-quality websites and applications for web. Currently working at <a href="https://getonnet.no/">GetOnNet</a> as a Jr. Frontend Developer where she builds reusable components with react js.</p>
                        <Link to="/contact" className="btn">Contact me</Link>
                        <SocialLink />
                    </div>
                </article>
                {/* <Image fluid={fluid} className="hero-img" /> */}
            </div>
        </header>
    )
}

export default Hero
