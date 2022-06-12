import styled from 'styled-components';
import { responsive } from '../../styles/responsive';

export const SearchContainer = styled.div`
    width: 18em;
    height: 2em;
    display: flex;

    @media(max-width: ${responsive.xl}){
        width: 14em;
    }

    @media(max-width: ${responsive.lg}){
        width: 10em;
    }

    @media(max-width: ${responsive.md}){
        width: 20em;
        margin-top: 1em;
    }
`;

export const SearchInput = styled.input`
    width: 80%;
    border: 1px solid #E7E6Ef;
    outline: none;
    font-size: 1em;
    padding-left: 1em;
`

export const SearchLabel = styled.label`
    width: 15%;
    height: 100%;
    background-color: #FB2E86;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    
    &:active{
        transform: scale(0.95);
        box-shadow: 0 0 0.5em black;
    };

    @media(max-width: ${responsive.lg}){
        width: 20%;
    }

`