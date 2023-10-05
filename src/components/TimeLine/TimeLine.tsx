'use client';

import React, {
    ReactElement,
    useState,
    useEffect,
    useRef,
    useCallback,
} from 'react';
import {
    TimeLineContentStyled,
    TimeLineTickerStyled,
    TimeLineLabelStyled,
} from './TimeLine.styles';

interface TimeLineProps {
    tickersCount: number;
}

interface TimeLineTickerProps {
    count: number;
    scrollProgress: number;
}

export const TimeLineTicker: React.FC<TimeLineTickerProps> = ({
    count,
    scrollProgress,
}) => {
    let tickers: ReactElement[] = [];
    const mileStones: { [key: number]: string } = {
        2: '2007',
        17: '2018',
        32: '2021',
    };
    const colorLabel = (i: number) => {
        if (i >= 32) {
            return { $labelOrange: true };
        } else {
            return { $labelOrange: false };
        }
    };
    for (let i = 0; i < count; i++) {
        const activeTickerIndex: number =
            Math.round(scrollProgress * count) - 6;
        const activeTicker: boolean = i === activeTickerIndex;
        const actibeSiblingTicker: boolean =
            i === activeTickerIndex + 1 || i === activeTickerIndex - 1
                ? true
                : false;

        if (Object.keys(mileStones).includes(i.toString())) {
            tickers.push(
                <TimeLineLabelStyled
                    key={i}
                    {...colorLabel(i)}
                    $activeTicker={activeTicker}
                    $activeSibling={actibeSiblingTicker}
                >
                    {mileStones[i]}
                </TimeLineLabelStyled>
            );
        } else {
            tickers.push(
                <TimeLineTickerStyled
                    key={i}
                    {...colorLabel(i)}
                    $activeTicker={activeTicker}
                    $activeSibling={actibeSiblingTicker}
                />
            );
        }
    }
    return <>{tickers}</>;
};

export const TimeLine: React.FC<TimeLineProps> = (props) => {
    const timeLineRef = useRef<HTMLDivElement>(null);
    const [scrollProgressState, setScrollProgressState] = useState<number>(0);

    // Calculate timeline scroll progress
    const getScrollProps = useCallback(() => {
        const rect = timeLineRef.current?.getBoundingClientRect();
        const scrollProgress = rect
            ? rect.bottom - window.innerHeight < rect.height
                ? Number(
                      (
                          1 -
                          (rect.bottom - window.innerHeight) / rect.height
                      ).toFixed(2)
                  )
                : 0
            : 0;

        if (scrollProgress !== scrollProgressState) {
            setScrollProgressState(scrollProgress);
        }
    }, [scrollProgressState]);
    useEffect(() => {
        if (window !== undefined) {
            window.addEventListener('scroll', () => getScrollProps(), false);
        }
        return () => {
            window.removeEventListener('scroll', () => getScrollProps(), false);
        };
    }, [getScrollProps]);

    const { tickersCount } = props;
    return (
        <TimeLineContentStyled ref={timeLineRef}>
            <TimeLineTicker
                count={tickersCount}
                scrollProgress={scrollProgressState}
            />
        </TimeLineContentStyled>
    );
};
