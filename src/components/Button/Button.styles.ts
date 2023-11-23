import styled from 'styled-components';
import { theme } from '@styles/theme';
import { inter } from '@/styles/fonts';

interface ButtonStyledProps {
    color?: 'blue' | 'orange';
}

export const ButtonStyled = styled.div<ButtonStyledProps>`
    border-radius: 50px;
    padding: 1.25rem 3rem;
    color: ${theme.colors.white};
    font-size: 1.25rem;
    background-color: ${(props) =>
        props.color === 'orange'
            ? `${theme.colors.oranger}`
            : `${theme.colors.bluish}`};
    font-family: ${inter.style.fontFamily};
    font-weight: 700;
`;
