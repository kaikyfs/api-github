import styled from "styled-components";
import { Link } from 'react-router-dom'; 


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;


export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input`
  background: rgba(0,0,0, 0.8);
  width: 100%;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.white};

  &::placehoder {
    color: #7f8c8d;
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 80px;
  border: 3px solid ${(props) => props.theme.colors.white};
  transition: background 0.3s;

  &:hover {
  background: ${(props) => props.theme.colors.container}
  }
`;

