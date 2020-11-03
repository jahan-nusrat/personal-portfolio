import styled from 'styled-components';

export const ProjectContainer = styled.section`
    font-family: 'Poppins', sans-serif;
    .section-title{
        color:#e6f1ff;
        font-size:2rem;
        font-weight:600;
        &:after{
            content:'';
            width:350px;
            height: 0.3px;
            position:absolute;
            top:50%;
            right: 1.2rem;
            background-color:#2D3952;
        }
    }
    .title{
        text-align:right;
        h3{
            color:#e6f1ff;
            font-weight:700;
            font-size:1.4rem;
            &:hover{
                color:#64ffda;
            }
        }
    }
    .projects{
        position:relative;
        margin-bottom: 5rem;
        .project-img{
            .card{
                background-color:transparent;
                border: 1px solid transparent;
            }
            box-shadow:rgb(10 25 47) 0px 10px 30px -15px;
            img{
                cursor:pointer;
            }
        }
        .info{
        position:absolute;
        top:10%;
        left:70%;
        transform:translateY(-90%);
        transform:translateX(-60%);
        .technologies{
            text-align:right;
            p{
                font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
                width:100%;
            }
        }
        .section-description{
        background-color:#172A45;
        color:#a8b2d1;
        font-size:0.9rem;
            }
        p{
            margin-bottom:0;
            text-align:right;
        }
        }
    }
    
`