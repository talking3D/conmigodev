import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
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
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};

export const size: VieportSize = {
    xs: 375,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
};

export const device: Record<keyof VieportSize, string> = {
    xs: `(min-width: ${size.xs}px)`,
    sm: `(min-width: ${size.sm}px)`,
    md: `(min-width: ${size.md}px)`,
    lg: `(min-width: ${size.lg}px)`,
    xl: `(min-width: ${size.xl}px)`,
    xxl: `(min-width: ${size.xxl}px)`,
};
