import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        bluish: '#0056F5',
        oranger: '#EAB64D',
        yellowish: '#FFF8E9',
        white: '#FFFFFF',
        black: '#000000',
    },
};

type VieportSize = {
    xs: number;
    xr: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};

export const size: VieportSize = {
    xs: 375,
    xr: 414,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
};

export const viewport: Record<
    'media' | 'size',
    Record<keyof VieportSize, string>
> = {
    media: {
        xs: `@media (min-width: ${size.xs}px)`,
        xr: `@media (min-width: ${size.xr}px)`,
        sm: `@media (min-width: ${size.sm}px)`,
        md: `@media (min-width: ${size.md}px)`,
        lg: `@media (min-width: ${size.lg}px)`,
        xl: `@media (min-width: ${size.xl}px)`,
        xxl: `@media (min-width: ${size.xxl}px)`,
    },
    size: {
        xs: `${size.xs}px`,
        xr: `${size.xr}px`,
        sm: `${size.sm}px`,
        md: `${size.md}px`,
        lg: `${size.lg}px`,
        xl: `${size.xl}px`,
        xxl: `${size.xxl}px`,
    },
};
