import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";


interface ContainerProps{
    color?: 'default' | 'sky_blue' | 'pantone_purple'; 
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
        color: #FFFFFF;
    }

`;

export const Container = styled.div`
    max-width: 1320px;
    width: 1320px;
`

export const ContainerFluid = styled.div<ContainerProps>`
    max-width: 100%;
    width: 100%;
    background-color: ${props => props.color == 'default' 
                        ? '#FFFFFF' : props.color === 'sky_blue' 
                        ? props.theme.colors.sky_blue : props.theme.colors.pantone_purple};
`

