import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";

import githubLogo from "../../assets/images/github-logo.svg";

function MainPage() {
  const [login, setLogin] = useState('');

  const handleSearch = (event) => {
    if (!login.trim()) {
      event.preventDefault();
      // eslint-disable-next-line no-alert
      alert("Por favor, insira um nome de usuário!");
    }
  };

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input 
          placeholder="usuário" 
          value={login} 
          onChange={(event) => setLogin(event.target.value)} 
        />
        <Button 
          to={`/${login}/repositories`} 
          onClick={handleSearch} // Verifica o campo antes de redirecionar
        >
          <MdSearch size={42} color="white" />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;
