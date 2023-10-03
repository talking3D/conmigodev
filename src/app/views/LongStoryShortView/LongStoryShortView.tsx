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
import numpyIcon from 'public/icons/numpy-icon.svg';
import postgresqlIcon from 'public/icons/postgresql-icon.svg';
import pythonIcon from 'public/icons/python-icon.svg';
import pandasIcon from 'public/icons/pandas-icon.svg';
import jupyterIcon from 'public/icons/jupyter-icon.svg';

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
                <DataScientistSectionStyled>
                    <Icon
                        title="Numpy"
                        src={numpyIcon}
                        $position="top"
                        $alignment="center"
                        $style={{
                            position: 'absolute',
                            top: '5%',
                            right: '25%',
                        }}
                    />
                    <Icon
                        title="PostgreSQL"
                        src={postgresqlIcon}
                        $position="top"
                        $alignment="center"
                        $style={{
                            position: 'absolute',
                            top: '12%',
                            left: '21%',
                        }}
                    />
                    <Icon
                        title="Python"
                        src={pythonIcon}
                        $position="top"
                        $alignment="center"
                        $style={{
                            position: 'absolute',
                            top: '35%',
                            left: '10%',
                        }}
                    />
                    <Icon
                        title="Jupyter"
                        src={jupyterIcon}
                        verbose={false}
                        $position="right"
                        $alignment="center"
                        $style={{
                            position: 'absolute',
                            top: '50%',
                            right: '24%',
                        }}
                    />
                    <Icon
                        title="Pandas"
                        src={pandasIcon}
                        $position="left"
                        $alignment="center"
                        $style={{
                            position: 'absolute',
                            top: '65%',
                            left: '28%',
                        }}
                    />
                </DataScientistSectionStyled>
                <SoftwareDeveloperSectionStyled></SoftwareDeveloperSectionStyled>
            </StoryMainContentWrapperStyled>
        </LongStoryShortSectionContainerStyled>
    );
};
