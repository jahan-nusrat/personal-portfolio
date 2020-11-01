import styled from 'styled-components';

export const StyledContainer=styled.main`
    font-family: 'Poppins', sans-serif;
    padding:4rem 0;
    .about{
        h3{
            color:#e6f1ff;
            font-size:2rem;
            font-weight:600;
            padding:2rem 0;
            &:after{
                content:'';
                width:350px;
                height: 0.3px;
                position:absolute;
                top:9%;
                right: 3rem;
                background-color:#2D3952;
            }
        }
        .description{
            color:#8892b0;
            p{
                line-height: 1.65rem;
            }
        }
        .skills{
            ul{
                list-style:none;
                color:#8892b0;
                font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
                font-size:14px;
                line-height: 1.8rem;
            }
        }
    }
    img{
        width:300px;
        height:400px;
        object-fit:contain;
        transform:scale(1);
        transition: all 0.3s linear;
        cursor:pointer;
        &:hover{
            transform:scale(1.14)
        }
    }
`