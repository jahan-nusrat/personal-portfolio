import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SocialLink from "../constants/socialLinks"

const query= graphql`
    {
        file(relativePath: {eq: "me.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(query)
    console.log(data)
    return (
        <h2>Hero components</h2>
    )
}

export default Hero
