import styled, { css } from 'styled-components';
import { CSSProperties } from 'styled-components';
import { theme, viewport, VieportSize } from '@/styles/theme';
import { inter, openSans, sourceCodePro } from '@/styles/fonts';

type Color = 'blue' | 'black';
type Family = 'code' | 'inter';
type Weight = 'regular' | 'bold' | 'semibold' | 'extrabold';

export interface TypographyProps {
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    $family?: Family | Partial<Record<keyof VieportSize, Family>>;
    $style?: CSSProperties;
    $color?: Color | Partial<Record<keyof VieportSize, Color>>;
    $size?: number | Partial<Record<keyof VieportSize, number>>;
    $weight?: Weight | Partial<Record<keyof VieportSize, Weight>>;
    $lineHeight?: number | Partial<Record<keyof VieportSize, number>>;
    className?: string;
}

// Function to get breakpoints from props and create a css string
const getBreakPoints = (props: TypographyProps) => {
    let breakpoints: Array<keyof VieportSize> = [];
    const { $family, $color, $size, $weight, $lineHeight } = props;
    Object.entries({ $family, $color, $size, $weight, $lineHeight }).map(
        ([_, prop]) => {
            if (prop && typeof prop === 'object') {
                Object.keys(prop).map((key) => {
                    if (!breakpoints.includes(key as keyof VieportSize)) {
                        breakpoints.push(key as keyof VieportSize);
                    }
                });
            }
        }
    );
    let cssString = '';
    breakpoints.length !== 0 &&
        breakpoints.map((breakpoint) => {
            cssString += `${viewport.media[breakpoint]} {`;
            if (
                $family &&
                typeof $family === 'object' &&
                $family[breakpoint] !== undefined
            ) {
                cssString += `font-family: ${getFontFamily(
                    $family[breakpoint]!
                )};`;
            }
            if (
                $size &&
                typeof $size === 'object' &&
                $size[breakpoint] !== undefined
            ) {
                cssString += `font-size: ${pxToRem($size[breakpoint]!)};`;
            }
            if (
                $lineHeight &&
                typeof $lineHeight === 'object' &&
                $lineHeight[breakpoint] !== undefined
            ) {
                cssString += `line-height: ${pxToRem(
                    $lineHeight[breakpoint]!
                )};`;
            }
            if (
                $weight &&
                typeof $weight === 'object' &&
                $weight[breakpoint] !== undefined
            ) {
                cssString += `font-weight: ${getFontWeight(
                    $weight[breakpoint]!
                )};`;
            }
            if (
                $color &&
                typeof $color === 'object' &&
                $color[breakpoint] !== undefined
            ) {
                cssString += getFontColor($color[breakpoint]!);
            }
            cssString += '};\n';
        });
    return cssString;
};

const getFontFamily = ($family: Family) => {
    switch ($family) {
        case 'code':
            return sourceCodePro.style.fontFamily;
        case 'inter':
            return inter.style.fontFamily;
        default:
            return openSans.style.fontFamily;
    }
};

const getFontColor = ($color: Color) =>
    $color === 'blue'
        ? `color: ${theme.colors.bluish}`
        : `color: ${theme.colors.black}`;

const getFontWeight = ($weight: Weight) => {
    switch ($weight) {
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
    ${(props) =>
        props.$color && typeof props.$color !== 'object'
            ? getFontColor(props.$color)
            : null};

    ${(props) =>
        props.$family && typeof props.$family !== 'object'
            ? `font-family: ${getFontFamily(props.$family)}`
            : `font-family: ${openSans.style.fontFamily}`};

    ${(props) =>
        props.$size && typeof props.$size !== 'object'
            ? `font-size: ${pxToRem(props.$size)}`
            : null};

    ${(props) =>
        props.$lineHeight && typeof props.$lineHeight !== 'object'
            ? `line-height: ${pxToRem(props.$lineHeight)}`
            : null};

    ${(props) =>
        props.$weight && typeof props.$weight !== 'object'
            ? `font-weight: ${getFontWeight(props.$weight)}`
            : null};

    ${(props) => {
        return css`
            ${getBreakPoints(props)}
        `;
    }}
`;

export const TypographyDynamicStyled = styled.span<TypographyProps>`
    ${(props) => {
        return css`
            ${getBreakPoints(props)}
        `;
    }}
`;
