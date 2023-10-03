import styled from 'styled-components';
import Image from 'next/image';
import { theme, viewport } from '@styles/theme';
import { CSSProperties } from 'react';

export interface IconStyledProps {
    $position?: 'left' | 'right' | 'top' | 'bottom';
    $alignment?: 'left' | 'right' | 'center';
    $style?: CSSProperties;
}

export const IconContainerStyled = styled.div<IconStyledProps>`
    display: flex;
    flex-direction: ${({ $position }) =>
        $position === 'left' || $position === 'right' ? 'row' : 'column'};
    column-gap: 0.5rem;
    justify-content: center;
    max-width: max-content;
    row-gap: 0.1rem;
    ${({ $style }) => ($style !== undefined ? { ...$style } : null)}
`;

export const IconImagesWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 30px;
    ${viewport.media.xs} {
        max-width: 40px;
    }
    ${viewport.media.xr} {
        max-width: 50px;
    }
    ${viewport.media.sm} {
        max-width: 60px;
    }
    ${viewport.media.md} {
        max-width: 70px;
    }
    ${viewport.media.lg} {
        max-width: 90px;
    }
    ${viewport.media.xl} {
        max-width: 120px;
    }
    ${viewport.media.xxl} {
    }
`;

export const IconImageStyled = styled(Image)`
    width: 100%;
    height: auto;
`;

export const IconShadowImageStyled = styled(Image)`
    width: 100%;
    height: auto;
`;

export const IconTextStyled = styled.div<IconStyledProps>`
    order: ${({ $position }) => ($position === 'top' ? -1 : 'initial')};
    font-weight: 500;
    font-size: 0.75rem;
    text-align: center;
    color: ${theme.colors.bluish};
    margin-top: ${(props) =>
        props.$position !== 'top' && props.$position !== 'bottom'
            ? props.$alignment === 'center'
                ? '9%'
                : '0'
            : '0'};
    ${viewport.media.xs} {
        font-weight: 600;
        font-size: 1rem;
    }
    ${viewport.media.md} {
        font-size: 1.5rem;
    }
    ${viewport.media.lg} {
        font-size: 1.75rem;
    }
`;
