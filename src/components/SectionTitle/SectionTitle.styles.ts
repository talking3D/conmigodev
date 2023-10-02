import styled from 'styled-components';
import Image from 'next/image';
import { viewport } from '@styles/theme';

interface SectionTitleStyledProps {
    $end?: boolean;
    $responsiveEllipse?: (keyof typeof viewport.media)[];
}

export const SectionTitleContainer = styled.div`
    display: flex;
    position: relative;
    margin-top: 2rem;
    max-height: 130px;
    align-items: center;
    max-width: max-content;
`;

export const SectionTitleTextStyled = styled.h2<SectionTitleStyledProps>`
    ${(props) =>
        !props.$responsiveEllipse && props.$end
            ? `margin-right: 2rem;`
            : `margin-left: 2rem;`}

    font-size: 1.5rem;
    z-index: 1;
    ${viewport.media.sm} {
        font-size: 2.125rem;
    }
    ${viewport.media.lg} {
        font-size: 3rem;
    }
    ${(props) =>
        props.$responsiveEllipse
            ? props.$responsiveEllipse.map(
                  (breakPoint) =>
                      `${viewport.media[breakPoint]} {margin-right: 2rem;}`
              )
            : null}
`;

// Refactor this if possible. To much code duplication.
export const SectionTitleEllipseStyled = styled(Image)<SectionTitleStyledProps>`
    position: absolute;
    width: 100%;
    height: auto;
    max-width: 80px;
    ${(props) =>
        !props.$responsiveEllipse && props.$end
            ? `right: 0; left: auto; transform: rotate(136deg);`
            : null}
    ${viewport.media.xs} {
        ${(props) =>
            props.$responsiveEllipse?.includes('xs')
                ? `right: 0; left: auto; transform: rotate(136deg);`
                : `left: 0; right: auto; transform: rotate(0deg);`}
    }
    ${viewport.media.xr} {
        ${(props) =>
            props.$responsiveEllipse?.includes('xr')
                ? `right: 0; left: auto; transform: rotate(136deg);`
                : `left: 0; right: auto; transform: rotate(0deg);`}
    }
    ${viewport.media.sm} {
        ${(props) =>
            props.$responsiveEllipse?.includes('sm')
                ? `right: 0; left: auto; transform: rotate(136deg);`
                : `left: 0; right: auto; transform: rotate(0deg);`}
        max-width: 100px;
    }
    ${viewport.media.md} {
        ${(props) =>
            props.$responsiveEllipse?.includes('md')
                ? `right: 0; left: auto; transform: rotate(136deg);`
                : `left: 0; right: auto; transform: rotate(0deg);`}
    }
    ${viewport.media.lg} {
        ${(props) =>
            props.$responsiveEllipse?.includes('lg')
                ? `right: 0; left: auto; transform: rotate(136deg);`
                : `left: 0; right: auto; transform: rotate(0deg);`}
        max-width: 140px;
    }
    ${viewport.media.xl} {
        ${(props) =>
            props.$responsiveEllipse?.includes('xl')
                ? `right: 0; left: auto; transform: rotate(136deg);`
                : `left: 0; right: auto; transform: rotate(0deg);`}
    }
    ${viewport.media.xxl} {
        ${(props) =>
            props.$responsiveEllipse?.includes('xxl')
                ? `right: 0; transform: rotate(136deg);`
                : `left: 0; right: auto; transform: rotate(0deg);`}
    }
`;
