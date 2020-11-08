import styled from 'styled-components';

export const NavContainer=styled.nav`
    .navbar-brand{
        color: #47ffda;
        width: 150px;
    }
    .navbar-nav{
        padding: 0.8rem 0rem;
        .nav-item{
            padding: 0rem 0.7rem;
            &:last-child{
                    border: 1px solid #47FFDA;
                    border-radius:3px;
                    transition:all 0.4s linear;
                    &:hover{
                        background-color: rgba(100, 255, 218, 0.07);
                    }
                    .nav-link{
                        color: #47ffda;
                    }
            }
            .nav-link{
                font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
                color:#8892b0;
                font-size:14px;
                font-weight:500;
                transition:all 0.3s linear;
                cursor:pointer;
                &:hover{
                    color:#47FFDA;
                }
                
            }
        }
    }
`