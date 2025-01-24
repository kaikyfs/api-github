import React from "react";

import { Container, Home } from "./styles";

function NotFoundPage() {
  return (
    <Container>
      <h1>404 - Página não encontrada</h1>
      <p>A rota que você tentou acessar não existe.</p>
      <Home to="/">
        Voltar para a página inicial
      </Home>
    </Container>
  );
}

export default NotFoundPage;
