import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeadArea = styled.div`
    display: flex;
    justify-content: space-between;
    color: #FFF;
    font-family: ${props => props.theme.font.primary};
    height: 2em;
`;

export const ContactArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 23em;
    height: 100%;
`

export const ContactItem = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    color: #FFF;
    width: 50%;
    gap: 5px;

`

export const HeadNav = styled.div`
    display: flex;
    justify-content: space-between;
`

export const HeadNavList = styled.ul`
    list-style-type: none;    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const SelectLink = styled.select`
    background: transparent;
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
`