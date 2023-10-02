'use client';

import React from 'react';
import { SectionTitle } from '@/components';
import {
    AboutMeViewContainerStyled,
    AboutMeViewContentStyled,
    HeaderParagraphStyled,
    AboutMeParagraphStyled,
    AboutMeParagraphWrapperStyled,
} from './AboutMeView.styles';

export const AboutMeView: React.FC = () => {
    return (
        <AboutMeViewContainerStyled>
            <SectionTitle
                title="About me"
                responsiveEllipse={['lg', 'xl', 'xxl']}
            />
            <AboutMeViewContentStyled>
                <AboutMeParagraphWrapperStyled>
                    <HeaderParagraphStyled>
                        I’m focused on the business perspective and have an
                        analytical approach
                    </HeaderParagraphStyled>
                    <AboutMeParagraphStyled>
                        Before I write the first line of code, I toil to
                        understand the purpose created outcome should achieve
                        once the last line is there. My road into the IT world
                        led through the vast realm of data analysis for
                        business. Probably it is where the uncontrollable need
                        to break everything down into its constituent parts was
                        born.
                    </AboutMeParagraphStyled>
                </AboutMeParagraphWrapperStyled>
                <AboutMeParagraphWrapperStyled>
                    <AboutMeParagraphStyled>
                        I endeavour to work in such a way that the things I
                        create bring the best possible results, regardless of
                        the project&rsquo;s scope. An essential element that
                        makes delivering the task successfully and allows for
                        avoiding many problems is communication. I firmly
                        believe that the heart of any project is not a specific
                        technology, programming language or paradigm. The most
                        important thing is the people!
                    </AboutMeParagraphStyled>
                    <HeaderParagraphStyled $right>
                        I value people and communication over frameworks and
                        technology.
                    </HeaderParagraphStyled>
                </AboutMeParagraphWrapperStyled>
            </AboutMeViewContentStyled>
        </AboutMeViewContainerStyled>
    );
};
