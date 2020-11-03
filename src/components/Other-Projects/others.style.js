import styled from 'styled-components';

export const StyledNoteworthy= styled.section`
    font-family: 'Poppins', sans-serif;
    .card{
        background-color:transparent;
        border:1px solid transparent;
    }
    .projects-card{
        background-color:#172A45;
        border-radius:5px;
        h5, p{
            color:#a8b2d1;
        }
        .openFolder{
            color:#56D8BF;
            font-size: 2.3rem;
        }
        .social-icon{
            a{
                color:#a8b2d1;
                .icon{
                    font-size:1.3rem;
                    &:hover{
                        color:#56D8BF;
                    }
                }
            }
        }
        .card-details{
            h5{
            color:#ccd6f6;
            font-size:22px;
            font-weight:600;
            }
            p{
                color:#a8b2d1;
                font-size:0.97rem;
            }
        }
        .bottom{
            p{
                font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
                line-height: 1.4;
                font-size:0.85rem;
                margin-top:2rem;
                color:#8892b0;
            }
        }
    }
`