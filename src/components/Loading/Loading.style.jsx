import styled, {keyframes} from 'styled-components';


export const LoadingContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    transform: scale(2);
`

const is_rotating = keyframes`
    to{
        transform: rotate(1turn);
    };
`

export const LoadingIcon = styled.div`
    animation: ${is_rotating} 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #a498e0;
    height: 50px;
    width: 50px;
`