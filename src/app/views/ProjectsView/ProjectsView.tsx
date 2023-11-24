'use client';

import React from 'react';

import {
    ProjectsViewContainerStyled,
    ProjectSectionTitleStyled,
    PaxiflyProjectContainerStyled,
    ProjectTitleStyled,
    ProjectDescriptionStyled,
    ProjectImageMobileStyled,
    ProjectImageDesktopStyled,
    ButtonContainerStyled,
} from './ProjectsView.styles';

import { SectionTitle, Typography, Button } from '@/components';
import paxiflyProjectImageMobile from 'public/project-paxifly-thumb-small.jpg';
import paxiflyProjectImageDesktop from 'public/project-paxifly-thumb-long.jpg';
import { viewport } from '@/styles/theme';

export const ProjectsView: React.FC = () => {
    return (
        <ProjectsViewContainerStyled>
            <ProjectSectionTitleStyled>
                <SectionTitle
                    title="My projects"
                    responsiveEllipse={['md', 'lg', 'xl', 'xxl']}
                />
            </ProjectSectionTitleStyled>
            <PaxiflyProjectContainerStyled>
                <ProjectTitleStyled>Paxifly</ProjectTitleStyled>
                <ProjectDescriptionStyled>
                    <Typography
                        as="p"
                        $size={{ sm: 18, md: 24 }}
                        $lineHeight={{ sm: 32, md: 36 }}
                    >
                        Paxifly is a groundbreaking online platform poised to
                        revolutionize the landscape of private air travel for
                        both individuals and businesses. It stands as a
                        comprehensive marketplace, offering a dynamic
                        environment for matching, buying, and selling flights
                        specifically on business jet.
                    </Typography>
                </ProjectDescriptionStyled>
                <ProjectImageMobileStyled
                    src={paxiflyProjectImageMobile}
                    alt="Paxifly project image"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: `${viewport.size.lg}`,
                    }}
                />
                <ProjectImageDesktopStyled
                    src={paxiflyProjectImageDesktop}
                    alt="Paxifly project image"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: `${viewport.size.lg}`,
                    }}
                />
                <ButtonContainerStyled>
                    <Button />
                </ButtonContainerStyled>
            </PaxiflyProjectContainerStyled>
        </ProjectsViewContainerStyled>
    );
};
