'use client';

import React, { ReactElement } from 'react';
import {
    TimeLineContentStyled,
    TimeLineTickerStyled,
    TimeLineItemStyled,
} from './TimeLine.styles';

interface TimeLineProps {}

export const TimeLineTicker: React.FC<{ count: number }> = ({ count }) => {
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
        if (Object.keys(mileStones).includes(i.toString())) {
            tickers.push(
                <TimeLineItemStyled key={i} {...colorLabel(i)}>
                    {mileStones[i]}
                </TimeLineItemStyled>
            );
        } else {
            tickers.push(<TimeLineTickerStyled key={i} {...colorLabel(i)} />);
        }
    }
    return <>{tickers}</>;
};

export const TimeLine: React.FC<TimeLineProps> = (props) => {
    const {} = props;

    return (
        <TimeLineContentStyled>
            <TimeLineTicker count={43} />
        </TimeLineContentStyled>
    );
};
