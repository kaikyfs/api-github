import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

import { Loading, SelectorContainer, Container, Sidebar, Main } from "./styles";
import { getUser, getRepos, getLangsFrom } from "../../services/api";

function RepositoriesPage() {
  const { login } = useParams();
  const navigate = useNavigate(); // Hook para redirecionamento
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Estado para controlar erros

  useEffect(() => {
    const loadData = async () => {
      try {
        const [userResponse, repositoriesResponse] = await Promise.all([
          getUser(login),
          getRepos(login),
        ]);

        setUser(userResponse.data);
        setRepositories(repositoriesResponse.data);
        setLanguages(getLangsFrom(repositoriesResponse.data));
        setError(false); // Limpa qualquer erro anterior
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError(true); // Define que ocorreu um erro 404
          navigate("/not-found"); // Redireciona para uma página de erro (opcional)
        }
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };
    loadData();
  }, [login, navigate]);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  // Exibe uma mensagem de erro se ocorrer um problema
  if (error) {
    return <Loading>Usuário não encontrado. Verifique o nome e tente novamente.</Loading>;
  }

  // Exibe o carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <SelectorContainer>
          <Profile user={user} />
          <Filter
            languages={languages}
            currentLanguage={currentLanguage}
            onClick={onFilterClick}
          />
        </SelectorContainer>
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories || []}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
