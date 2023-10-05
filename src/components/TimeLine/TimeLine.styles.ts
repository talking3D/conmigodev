import styled from 'styled-components';
import { theme, viewport } from '@styles/theme';

export type TimeLineStyledProps = {
    $labelOrange?: boolean;
    $activeTicker?: boolean;
    $activeSibling?: boolean;
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

// Sets the color and transparency of the timeline tickers based on props
const setTimelineElementColor = (
    orange?: boolean,
    active?: boolean,
    sibling?: boolean
) => {
    const color = orange ? theme.colors.orangeText : theme.colors.bluish;
    const transparency = active ? 1 : sibling ? 0.6 : 0.3;
    return addHexTransparency(color, transparency);
};

export const TimeLineTickerStyled = styled.div<TimeLineStyledProps>`
    width: 15px;
    height: 2px;
    transition:
        transform 0.2s ease-in-out,
        background-color 0.4s ease-in-out;
    transform-origin: right;

    background-color: ${(props) =>
        setTimelineElementColor(
            props.$labelOrange,
            props.$activeTicker,
            props.$activeSibling
        )};

    ${({ $activeTicker }) =>
        $activeTicker ? { transform: 'scale(2)' } : null};

    // If the ticker is active, scale it up
    ${({ $activeSibling }) =>
        $activeSibling
            ? {
                  transform: 'scale(1.5)',
              }
            : null}
    ${viewport.media.xs} {
        width: 20px;
        height: 3px;
    }
    ${viewport.media.lg} {
        width: 28px;
        height: 5px;
    }
`;

export const TimeLineLabelStyled = styled.span<TimeLineStyledProps>`
    font-size: 0.875rem;
    font-weight: 700;
    transition:
        transform 0.3s ease-in-out,
        background-color 0.4s ease-in-out;
    transform-origin: right;

    color: ${(props) =>
        setTimelineElementColor(
            props.$labelOrange,
            props.$activeTicker,
            props.$activeSibling
        )};

    ${({ $activeSibling }) =>
        $activeSibling ? { transform: 'scale(1.2)' } : null};
    ${({ $activeTicker }) =>
        $activeTicker ? { transform: 'scale(1.5)' } : null}
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
