import styled from 'styled-components';
import Image from 'next/image';
import { theme, viewport } from '@styles/theme';
import { CSSProperties } from 'react';

export interface IconStyledProps {
    $labelOrange?: boolean;
    $style?: CSSProperties;
}

export const IconContainerStyled = styled.div<IconStyledProps>`
    display: flex;
    flex-direction: column;
    column-gap: 0.5rem;
    align-items: center;
    max-width: max-content;
    row-gap: 0.1rem;
    ${({ $style }) => ($style !== undefined ? { ...$style } : null)}
`;

export const IconImagesWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
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
    font-weight: 500;
    font-size: 0.5rem;
    color: ${({ $labelOrange }) =>
        $labelOrange ? `${theme.colors.orangeText}` : `${theme.colors.bluish}`};
    align-self: start;
    text-align: center;
    width: 100%;
    ${viewport.media.xs} {
        font-weight: 600;
        font-size: 0.75rem;
    }
    ${viewport.media.md} {
        font-size: 1rem;
    }
    ${viewport.media.lg} {
        font-size: 1.5rem;
    }
`;
