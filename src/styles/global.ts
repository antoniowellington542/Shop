import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

interface ContainerProps{
    color?: 'default' | 'sky_blue' | 'purple'; 
}

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #FFFFFF;
        font-family: sans-serif;
        color: black;
    }

`;

export const Container = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 950px){
        width: 90%;
    }

`

export const ContainerFluid = styled.div<ContainerProps>`
    width: 100%;
    background-color: ${props => props.color === 'purple' 
                        ? props.theme.colors.purple : props.color === 'sky_blue' 
                        ? props.theme.colors.sky_blue : '#FFFFFF'};
`

