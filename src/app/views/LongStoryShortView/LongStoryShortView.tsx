'use client';

import React from 'react';
import { StoryMainImageWrapperStyled } from './LongStoryShortView.styles';
import { SectionTitle } from '@/components';
import Image from 'next/image';
import longStoryShortImage from 'public/long-story-short.svg';

export const LongStoryShortView: React.FC = () => {
    return (
        <StoryMainImageWrapperStyled>
            <SectionTitle title="Long story short" />
            <Image src={longStoryShortImage} alt="long story short" />
        </StoryMainImageWrapperStyled>
    );
};
