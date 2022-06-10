import styled from 'styled-components';
import searchIcon from '../../../public/icons/search_icon.svg';

declare module "*.svg";
declare module "*.png";

export const SearchContainer = styled.div`
    width: 18em;
    height: 2.5em;
    display: flex;
`;

export const SearchInput = styled.input`
    width: 80%;
    border: 1px solid #E7E6Ef;
`

export const SearchLabel = styled.label`
    width: 20%;
    height: 100%;
    background-color: #FB2E86;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &:active{
        transform: scale(0.95);
        box-shadow: 0 0 0.5em black;
    };
`