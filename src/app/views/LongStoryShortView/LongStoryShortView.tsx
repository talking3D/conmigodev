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
    TimeLineWrapperStyled,
} from './LongStoryShortView.styles';
import { SectionTitle, Icon, TimeLine } from '@/components';

import longStoryShortImage from 'public/long-story-short.svg';
import excelIcon from 'public/icons/excel-icon.svg';
import accessIcon from 'public/icons/access-icon.svg';
import ppIcon from 'public/icons/pp-icon.svg';
import numpyIcon from 'public/icons/numpy-icon.svg';
import postgresqlIcon from 'public/icons/postgresql-icon.svg';
import pythonIcon from 'public/icons/python-icon.svg';
import pandasIcon from 'public/icons/pandas-icon.svg';
import jupyterIcon from 'public/icons/jupyter-icon.svg';
import jsIcon from 'public/icons/js-icon.svg';
import tsIcon from 'public/icons/ts-icon.svg';
import reactIcon from 'public/icons/react-icon.svg';
import nodeIcon from 'public/icons/node-icon.svg';
import nextIcon from 'public/icons/next-icon.svg';
import djangoIcon from 'public/icons/django-icon.svg';
import jestIcon from 'public/icons/jest-icon.svg';

export const LongStoryShortView: React.FC = () => {
    return (
        <LongStoryShortSectionContainerStyled>
            <StoryTitleStyled>
                <SectionTitle title="Long story short" end />
            </StoryTitleStyled>
            <StoryMainContentWrapperStyled>
                <TimeLineWrapperStyled>
                    <TimeLine tickersCount={43} />
                </TimeLineWrapperStyled>
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
                        $style={{
                            position: 'absolute',
                            top: '-5%',
                            left: '25%',
                        }}
                    />
                    <Icon
                        title="Access"
                        src={accessIcon}
                        $style={{
                            position: 'absolute',
                            top: '15%',
                            right: '20%',
                        }}
                    />
                    <Icon
                        title="Power Point"
                        src={ppIcon}
                        $style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '20%',
                        }}
                    />
                </DataAnalystSectionStyled>
                <DataScientistSectionStyled>
                    <Icon
                        title="Numpy"
                        src={numpyIcon}
                        $style={{
                            position: 'absolute',
                            top: '5%',
                            right: '25%',
                        }}
                    />
                    <Icon
                        title="PostgreSQL"
                        src={postgresqlIcon}
                        $style={{
                            position: 'absolute',
                            top: '10%',
                            left: '28%',
                        }}
                    />
                    <Icon
                        title="Python"
                        src={pythonIcon}
                        $style={{
                            position: 'absolute',
                            top: '40%',
                            left: '15%',
                        }}
                    />
                    <Icon
                        title="Jupyter"
                        src={jupyterIcon}
                        verbose={false}
                        $style={{
                            position: 'absolute',
                            top: '50%',
                            right: '24%',
                        }}
                    />
                    <Icon
                        title="Pandas"
                        src={pandasIcon}
                        $style={{
                            position: 'absolute',
                            top: '54%',
                            left: '38%',
                        }}
                    />
                </DataScientistSectionStyled>
                <SoftwareDeveloperSectionStyled>
                    <Icon
                        title="JavaScript"
                        src={jsIcon}
                        $labelOrange
                        $style={{
                            position: 'absolute',
                            top: '-5%',
                            left: '30%',
                        }}
                    />
                    <Icon
                        title="TypeScript"
                        src={tsIcon}
                        $labelOrange
                        $style={{
                            position: 'absolute',
                            top: '5%',
                            right: '30%',
                        }}
                    />
                    <Icon
                        title="React"
                        src={reactIcon}
                        $labelOrange
                        $style={{
                            position: 'absolute',
                            top: '20%',
                            left: '13%',
                        }}
                    />
                    <Icon
                        title="Django"
                        src={djangoIcon}
                        $labelOrange
                        $style={{
                            position: 'absolute',
                            top: '25%',
                            right: '15%',
                        }}
                    />
                    <Icon
                        title="Jest"
                        src={jestIcon}
                        $labelOrange
                        $style={{
                            position: 'absolute',
                            top: '50%',
                            left: '30%',
                        }}
                    />
                    <Icon
                        title="Nextjs"
                        src={nextIcon}
                        $labelOrange
                        verbose={false}
                        $style={{
                            position: 'absolute',
                            top: '55%',
                            left: '10%',
                        }}
                    />
                    <Icon
                        title="Nodejs"
                        src={nodeIcon}
                        $labelOrange
                        verbose={false}
                        $style={{
                            position: 'absolute',
                            top: '50%',
                            right: '35%',
                        }}
                    />
                </SoftwareDeveloperSectionStyled>
            </StoryMainContentWrapperStyled>
        </LongStoryShortSectionContainerStyled>
    );
};
