import React from "react";
import PropTypes from "prop-types";

import { Container, Selector, Cleaner, Home } from './styles';

function Filter({ languages, currentLanguage, onClick }) {
    const selectors = languages.map(({ name, count, color }) => (
        <Selector
            key={name.toLowerCase()}
            color={color}
            className={currentLanguage === name ? 'selected' : ''}
            onClick={() => onClick && onClick(name)}
        >
            <span>{name}</span>
            <span>{count}</span>
        </Selector>
    ))

    return (
        <Container>
            {selectors}
            <Cleaner onClick={() => onClick && onClick(undefined)}>
                Limpar filtros
            </Cleaner>
            <Home to="/">Voltar</Home>
        </Container>
    )
};

Filter.defaultProps = {
    currentLanguage: null,
    onClick: null,
}

Filter.propTypes = {
    languages: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            count: PropTypes.string.isRequired,
            color: PropTypes.string,
        }).isRequired
    ).isRequired,
    currentLanguage: PropTypes.string,
    onClick: PropTypes.func,
}

export default Filter;