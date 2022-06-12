import { Link } from "react-router-dom";
import styled from "styled-components";
import {responsive} from '../../styles/responsive';

export const HeadArea = styled.div`
    display: flex;
    justify-content: space-between;
    color: #FFF;
    font-family: ${props => props.theme.font.primary};
    font-weight: 600;
    height: 2em;
    width: 100%;

    @media(max-width: ${responsive.lg}){
        flex-direction: column;
        height: 4em;
    }
`;

export const ContactArea = styled.div`
    display: flex;
    justify-content: start;
    height: 100%;
    width: 50%;
   
    @media(max-width: ${responsive.lg}){
        width: 100%;
        justify-content: space-around;
    }
`

export const ContactItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    gap: 3px;
    margin-left: 5px;

`

export const HeadNav = styled.div`
    display: flex;
    justify-content: end;
    width: 50%;
    @media(max-width: ${responsive.lg}){
        width: 100%;
        padding-top: 5px;
        justify-content: center;
    }
`

export const HeadNavList = styled.ul`
    list-style-type: none;    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 0;
    margin: 0;

`

export const SelectLink = styled.select`
    background: ${props => props.theme.colors.purple};
    border: none;
    color: #FFFFFF;
    text-align: end;
`

export const HeadNavItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 5px;


`

export const HeadNavLink = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    display: flex;
    gap: 2px;
`