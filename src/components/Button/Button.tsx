import { FC } from "react";
import {ButtonContainer} from './Button.style';

interface ButtonProps{
    primary: boolean;
    size: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({primary, size, label}: ButtonProps) =>{
    return(
        <ButtonContainer
            primary={primary}
            size={size}
        >
            {label}
        </ButtonContainer>
    );
}
