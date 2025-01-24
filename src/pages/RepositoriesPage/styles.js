import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    min-height: 100vh;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        flex-direction: column;
    }
`;

export const Loading = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const Sidebar = styled.aside`
    background: ${(props) => props.theme.colors.background};
    min-width: 20rem;
    max-height: 100vh;
    overflow-y: hidden;
`;

export const SelectorContainer = styled.div`
    max-height: 100%; 
    overflow-y: auto; 
    scrollbar-width: thin; 
    scrollbar-color: ${(props) => props.theme.colors.light} transparent;

    &::-webkit-scrollbar {
        width: 8px; 
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.light};
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;

export const Main = styled.section`
    background: ${(props) => props.theme.colors.container};
    width: 100%;
    height: 100vh;
    padding: 40px;
    overflow-y: hidden;


    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        height: 100%;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        padding: 40px 20px;
    }
`;