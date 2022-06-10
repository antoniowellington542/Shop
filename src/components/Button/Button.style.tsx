import styled from "styled-components";

interface ButtonProps {
    primary: boolean;
    size: 'small' | 'medium' | 'large';
}


export const ButtonContainer = styled.div<ButtonProps>`
    background-color: ${
        props => props.primary === true 
        ? props.theme.colors.pink : props.theme.colors.purple
    };
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 5px;
    font-family: ${props => props.theme.font.primary};
    width: ${
                props => props.size === 'small' 
                ? '5em' : props.size === 'medium' 
                ? '9em' : '13em'
    };
    height: ${
        props => props.size === 'small' 
        ? '2em' : props.size === 'medium' 
        ? '2.5em' : '3em'
    };

`;