'use client';

import React from 'react';
import {
    LongStoryShortSectionContainerStyled,
    StoryMainImageWrapperStyled,
    StoryTitleStyled,
    StoryMainContentWrapperStyled,
    LongStoryShortSectionMainImageStyled,
    DataAnalystSectionStyled,
    DataScientistSectionStyled,
    SoftwareDeveloperSectionStyled,
} from './LongStoryShortView.styles';
import { SectionTitle, Icon } from '@/components';

import longStoryShortImage from 'public/long-story-short.svg';
import excelIcon from 'public/icons/excel-icon.svg';
import accessIcon from 'public/icons/access-icon.svg';
import ppIcon from 'public/icons/pp-icon.svg';

export const LongStoryShortView: React.FC = () => {
    return (
        <LongStoryShortSectionContainerStyled>
            <StoryTitleStyled>
                <SectionTitle title="Long story short" end />
            </StoryTitleStyled>
            <StoryMainContentWrapperStyled>
                <StoryMainImageWrapperStyled>
                    <LongStoryShortSectionMainImageStyled
                        src={longStoryShortImage}
                        alt="long story short"
                    />
                </StoryMainImageWrapperStyled>
                <DataAnalystSectionStyled>
                    <Icon
                        title="Excel"
                        src={excelIcon}
                        $position="top"
                        $alignment="center"
                        $style={{
                            position: 'absolute',
                            top: '5%',
                            left: '30%',
                        }}
                    />
                    <Icon
                        title="Access"
                        src={accessIcon}
                        $position="left"
                        $alignment="center"
                        $style={{
                            position: 'absolute',
                            top: '40%',
                            right: '15%',
                        }}
                    />
                    <Icon
                        title="Power Point"
                        src={ppIcon}
                        $position="left"
                        $alignment="center"
                        $style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '20%',
                        }}
                    />
                </DataAnalystSectionStyled>
                <DataScientistSectionStyled></DataScientistSectionStyled>
                <SoftwareDeveloperSectionStyled></SoftwareDeveloperSectionStyled>
            </StoryMainContentWrapperStyled>
        </LongStoryShortSectionContainerStyled>
    );
};
