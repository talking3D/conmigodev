'use client';
import { styled } from 'styled-components';
import { theme, viewport } from '@/styles/theme';

// TopSection of the main page styles
export const TopSectionStyled = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${theme.colors.yellowish};
    padding-bottom: 15%;
    ${viewport.media.xs} {
        padding-bottom: 0px;
    }
    ${viewport.media.sm} {
        padding-bottom: 60px;
    }
`;

export const TopSectionContentStyled = styled.div`
    max-width: ${viewport.size.xxl};
    width: 100%;
    margin: 0 auto;
`;

export const TopSectionHeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`;

export const LogoWrapperStyled = styled.div`
    margin-left: 0.625rem;
    max-width: 165px;
    width: 100%;
    height: auto;
    ${viewport.media.md} {
        max-width: 208px;
        margin-left: 2rem;
    }
`;

export const LongStoryShortSectionStyled = styled.div`
    max-width: ${viewport.size.xxl};
    margin: 0 auto;
`;

export const AboutMeSectionStyled = styled.div`
    max-width: ${viewport.size.xxl};
    margin: 0 auto;
`;

export const ProjectsSectionStyled = styled.div`
    margin: 0 auto;
    max-width: ${viewport.size.xxl};
`;
