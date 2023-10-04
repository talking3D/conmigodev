import styled from 'styled-components';
import { theme, viewport } from '@styles/theme';

export type TimeLineStyledProps = {
    $labelOrange?: boolean;
};

export const TimeLineContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
`;

// Function adds transparency to hex color for timeline tickers
const addHexTransparency = (hex: string, alpha: number): string => {
    const hexAlpha = Math.round(alpha * 255).toString(16);
    return `${hex}${hexAlpha}`;
};

export const TimeLineTickerStyled = styled.div<TimeLineStyledProps>`
    width: 15px;
    height: 2px;
    background-color: ${({ $labelOrange }) =>
        $labelOrange
            ? `${addHexTransparency(theme.colors.orangeText, 0.3)}`
            : `${addHexTransparency(theme.colors.bluish, 0.3)}`};
    ${viewport.media.xs} {
        width: 20px;
        height: 3px;
    }
    ${viewport.media.lg} {
        width: 28px;
        height: 5px;
    }
`;

export const TimeLineItemStyled = styled.span<TimeLineStyledProps>`
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ $labelOrange }) =>
        $labelOrange
            ? `${addHexTransparency(theme.colors.orangeText, 0.3)}`
            : `${addHexTransparency(theme.colors.bluish, 0.3)}`};
    text-align: left;
    padding-right: 0.125rem;
    ${viewport.media.xs} {
        font-size: 1rem;
        font-weight: 600;
    }
    ${viewport.media.sm} {
        font-size: 1.5rem;
    }
    ${viewport.media.sm} {
        font-size: 1.75rem;
        font-weight: 700;
    }
`;
