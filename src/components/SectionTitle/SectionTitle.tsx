'use client';
import React from 'react';
import elispeTitle from '/public/ellipse-title.svg';
import { viewport } from '@styles/theme';

import {
    SectionTitleContainer,
    SectionTitleEllipseStyled,
    SectionTitleTextStyled,
} from './SectionTitle.styles';

interface SectionTitleProps {
    title: string;
    end?: boolean;
    responsiveEllipse?: (keyof typeof viewport.media)[];
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
    const { title, end, responsiveEllipse } = props;
    return (
        <SectionTitleContainer>
            <SectionTitleEllipseStyled
                src={elispeTitle}
                alt="title header ellipse"
                $end={end}
                $responsiveEllipse={responsiveEllipse}
            />
            <SectionTitleTextStyled
                $end={end}
                $responsiveEllipse={responsiveEllipse}
            >
                {title}
            </SectionTitleTextStyled>
        </SectionTitleContainer>
    );
};
