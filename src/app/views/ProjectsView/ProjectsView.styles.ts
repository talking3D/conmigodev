import styled from 'styled-components';
import { theme, viewport } from '@/styles/theme';
import Image from 'next/image';

export const ProjectsViewContainerStyled = styled.div`
    display: flex;
    background-color: ${theme.colors.yellowish};
    flex-direction: column;
    align-self: center;
    padding: 2rem 0;

    ${viewport.media.xs} {
        margin-top: 6rem;
    }
    ${viewport.media.xr} {
        margin-top: 8rem;
    }
    ${viewport.media.sm} {
        margin-top: 10rem;
    }
    ${viewport.media.md} {
        margin-top: 12rem;
    }
    ${viewport.media.lg} {
        margin-top: 14rem;
    }
    ${viewport.media.xl} {
        margin-top: 18rem;
    }
    ${viewport.media.xxl} {
        border-radius: 30px;
    }
`;

export const ProjectSectionTitleStyled = styled.div`
    ${viewport.media.xs} {
        margin-left: 1rem;
    }
    ${viewport.media.lg} {
        margin-left: 3rem;
    }
`;

export const PaxiflyProjectContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    max-width: ${viewport.size.xl};
    width: 100%;
    background-color: ${theme.colors.lightBluish};
    border-radius: 15px;
    ${viewport.media.lg} {
        flex-direction: row;
    }
    overflow: hidden;
`;

export const PaxiflyProjectDescriptionContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-bottom: 2rem; */
    font-size: 1.125rem;
    line-height: 2rem;
    overflow: visible;
    min-width: min-content;
    ${viewport.media.lg} {
        max-width: ${viewport.size.sm};
    }
`;

export const ProjectTitleStyled = styled.h3`
    font-size: 1.75rem;
    font-weight: 700;
    margin: 1.75rem auto 0;
    ${viewport.media.md} {
        font-size: 2rem;
    }
    ${viewport.media.lg} {
        font-size: 3rem;
        margin-top: 2.75rem;
        margin-bottom: 1.5rem;
    }
`;

export const ProjectDescriptionStyled = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    min-width: min-content;

    ${viewport.media.md} {
        padding-right: 2rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }
    ${viewport.media.lg} {
        min-width: ${viewport.size.sm};
        padding-left: 2rem;
    }
`;

export const ProjectImageMobileStyled = styled(Image)`
    width: 100%;
    ${viewport.media.lg} {
        display: none;
    }
`;
export const ProjectImageDesktopStyled = styled(Image)`
    display: none;

    ${viewport.media.lg} {
        display: flex;
        width: 100%;
        overflow: visible;
    }
`;

export const ButtonContainerMobileStyled = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.lightBluish};
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    width: 100%;
    padding: 2.25rem 0;
    ${viewport.media.md} {
        padding: 4rem 0;
    }
    ${viewport.media.lg} {
        display: none;
    }
`;

export const ButtonContainerDesktopStyled = styled.div`
    display: none;
    ${viewport.media.lg} {
        display: flex;
        margin-bottom: 2rem;
    }
`;
