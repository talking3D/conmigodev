import styled from 'styled-components';
import { theme, viewport } from '@styles/theme';
import { inter } from '@/styles/fonts';

interface ButtonStyledProps {
    color?: 'blue' | 'orange';
}

export const ButtonStyled = styled.div<ButtonStyledProps>`
    display: inline-block;
    position: relative;
    border-radius: 50px;
    padding: 1.25rem 3rem;
    color: ${theme.colors.white};
    font-size: 1.25rem;
    font-family: ${inter.style.fontFamily};
    font-weight: 700;
    ${viewport.media.md} {
        font-size: 2rem;
    }
    overflow: hidden;
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 0%;
        border-radius: 50px;
        background-color: ${(props) =>
            props.color === 'orange'
                ? `${theme.colors.bluish}`
                : `${theme.colors.orangeText}`};
        z-index: -1;
        transition: all 0.3s ease-in-out;
    }
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 50px;
        color: ${theme.colors.white};
        background-color: ${(props) =>
            props.color === 'orange'
                ? `${theme.colors.orangeText}`
                : `${theme.colors.bluish}`};
        z-index: -2;
        transition: all 0.3s ease-in-out;
    }
    &:hover:before {
        width: 100%;
        height: 100%;
    }
`;
