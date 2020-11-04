import React from 'react'
import { StyledFooter } from './footer.style'

const Footer = () => {
    return (
        <StyledFooter className="text-center py-4">
            <a target="_blank" rel="noopener noreferrer" href="https://www.netlify.com/">
                <div>Hosted on Netlify</div>
            </a>
        </StyledFooter>
    )
}

export default Footer
