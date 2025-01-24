import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    text-align: center;
    padding: 2rem;
`;

export const Home = styled(Link)`
    background: transparent;
    color: ${(props) => props.theme.colors.white};
    border: none;
    text-align: left;
    padding: 1rem;
    text-decoration: none;
    
    &:hover{
        color: rgba(255, 255, 255 ,0.5);
        cursor: pointer;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        text-align: center;
        padding: 0 1rem;
    }
`;


