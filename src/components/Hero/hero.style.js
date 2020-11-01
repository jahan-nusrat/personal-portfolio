import styled from 'styled-components';

export const StyledContainer= styled.div`
    padding-top: 1rem;
    margin-bottom:5rem;
    .myself{
        .greetings{
            font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
            color:#47FFDA;
            font-size:1rem;
        }
        .name{
            font-family: 'Poppins', sans-serif;
            color:#e6f1ff;
            font-size:4rem;
            font-weight:600;
        }
        .things{
            font-family: 'Poppins', sans-serif;
            font-size:4rem;
            color:#8892b0;
            font-weight:600;
        }
        .info{
            width:550px;
            font-family: 'Poppins', sans-serif;
            font-size:1.05rem;
            color:#8892b0;
            margin:3.6rem 0;
        }
        button{
            border:1px solid #64ffda;
            color:#64ffda;
            font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
            font-size:14px;
            transition:all 0.4s linear;
            &:hover{
                background-color: rgba(100, 255, 218, 0.07);
            }
        }
    }
`