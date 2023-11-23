import styled from 'styled-components';
import { CSSProperties } from 'styled-components';
import { theme } from '@/styles/theme';
import { inter, openSans, sourceCodePro } from '@/styles/fonts';

type Color = 'blue' | 'black';
type Family = 'code' | 'inter';
type Weight = 'regular' | 'bold' | 'semibold' | 'extrabold';

export interface TypographyProps {
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    family?: Family;
    style?: CSSProperties;
    color?: Color;
    size?: number;
    weight?: Weight;
}

const getFontFamily = (family: Family) => {
    switch (family) {
        case 'code':
            return sourceCodePro.style.fontFamily;
        case 'inter':
            return inter.style.fontFamily;
        default:
            return openSans.style.fontFamily;
    }
};

const getFontWeight = (weight: Weight) => {
    switch (weight) {
        case 'regular':
            return '400';
        case 'semibold':
            return '600';
        case 'bold':
            return '700';
        case 'extrabold':
            return '800';
        default:
            return '400';
    }
};

export const pxToRem = (px: number) => `${px / 16}rem`;

export const TypographyStyled = styled.span<TypographyProps>`
    color: ${(props) =>
        props.color && props.color === 'blue'
            ? theme.colors.bluish
            : theme.colors.black};
    font-family: ${(props) =>
        props.family ? getFontFamily(props.family) : openSans.style.fontFamily};
    font-size: ${(props) => (props.size ? pxToRem(props.size) : '1rem')};
    font-weight: ${(props) =>
        props.weight ? getFontWeight(props.weight) : '400'};
`;
