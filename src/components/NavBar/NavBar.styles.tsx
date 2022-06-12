import { Link } from "react-router-dom";
import styled from "styled-components";
import {responsive} from '../../styles/responsive';

interface NavBarProps{
    selectItemMenu?: boolean;
    activeMenuToggle?: boolean;
}

export const NavBarArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
`
export const Logo = styled.h1`
    font-family: ${props => props.theme.font.primary}, sans-serif;
    color: ${props => props.theme.colors.text_color};
    font-size: 2em;
`
export const NavMenuArea = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

`

export const NavMenuToggle = styled.button`
    display: none;
    
    @media(max-width: ${responsive.md}){
        display: block;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

`

export const NavMenu = styled.div<NavBarProps>`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 0vh;
    align-items: center;

    @media(max-width: ${responsive.lg}){
        justify-content: space-around;
    }

    @media(max-width: ${responsive.md}){
        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: center;
        position: absolute;
        text-align: -webkit-center;
        top: 8em;
        width: 100%;
        left: 0;
        z-index: 0;
        visibility: hidden;
        overflow-y: hidden;
        transition: all ease-in 1.2s;
        background: #a29bfe;
        &.drop{
            visibility: visible;
            overflow-y: auto;
            height: calc(100vh - 8em);
            transition: all ease-in 0.8s;
            
        }
        
    }
`

export const NavMenuList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: ${props => props.theme.font.secondary}, sans-serif;
    @media(max-width: ${responsive.md}){
        flex-direction: column;
        gap: 30px;
        margin-top: 20px;
        
    }
`

export const NavMenuItens = styled.li`
        width: 100%;
        display: flex;
        justify-content: center;
        padding-left: 2em;
        &:nth-last-child(1){
            padding-right:1em ;
        }

    @media(max-width: ${responsive.xl}){
       
        padding-left: 0.5em;
    }

    @media(max-width: ${responsive.md}){
       font-size: 1.5em;
       padding-left: 0;
        &:nth-last-child(1){
            padding-right:0 ;
        }
        
    }

`

export const NavMenuLink = styled(Link)<NavBarProps>`


    @media(max-width: ${responsive.md}){
        //ANIMACAO MENU MOBILE
        ${NavMenuList}:hover ${NavMenuItens} &{
            color: #0002;
        }

        ${NavMenuList} ${NavMenuItens}:hover &{
            color: #000; background: rgba(255,255,255,1);
        }

        ${NavMenuList} ${NavMenuItens} &::before{
            content: ''; 
            position: absolute; 
            top: 41%; 
            left: 40%; 
            transform: translate(-50%,-50%); 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            font-size: 3em; 
            color: rgba(0,0,0,.1); 
            z-index: -1; 
            opacity: 0; 
            font-weight: 900; 
            text-transform: uppercase; 
            letter-spacing: 500px; 
            transition: letter-spacing 0.5s,left 0.5s;
        }

        ${NavMenuList} ${NavMenuItens} &:hover::before{
            content: attr(id); 
            opacity: 1; 
            left: 50%; 
            letter-spacing: 5px; 
            width: 100%; 
            height: 100vh; 
        }

        ${NavMenuList} ${NavMenuItens}:nth-child(6n+1) &:before { background: #81ecec; }
        ${NavMenuList} ${NavMenuItens}:nth-child(6n+2) &:before { background: #fd79a8; }
        ${NavMenuList} ${NavMenuItens}:nth-child(6n+3) &:before { background: #55efc4; } 
        ${NavMenuList} ${NavMenuItens}:nth-child(6n+4) &:before { background: #a29bfe; }
        ${NavMenuList} ${NavMenuItens}:nth-child(6n+5) &:before { background: #fd79a8; }
        ${NavMenuList} ${NavMenuItens}:nth-child(6n+6) &:before { background: #ffeaa7; }
        color: #333; 
        font-size: 1.4em;
        padding: 5px 20px;
        display: inline-flex;
        font-weight: 700; 
        transition: 0.5s;
        //FIM ANIMACAO MENU MOBILE
    }
    text-decoration: none;
    color: ${props => props.selectItemMenu === true  ? props.theme.colors.pink : props.theme.colors.text_color};

`
