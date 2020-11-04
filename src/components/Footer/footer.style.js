import styled from 'styled-components';

export const StyledFooter= styled.footer`
    margin-top: 6rem;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
    background-color:#020C1B;
    a{
        color: rgb(136, 146, 176);
        font-size:13px;
        text-decoration:none;
        transition:all 0.3s linear;
        &:hover{
            color:#64ffda;
        }
    }
`