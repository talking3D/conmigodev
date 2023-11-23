import styled from 'styled-components';
import { theme, viewport } from '@/styles/theme';
import Image from 'next/image';

export const ProjectsViewContainerStyled = styled.div`
    display: flex;
    background-color: ${theme.colors.yellowish};
    flex-direction: column;
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

    padding: 2rem 0;
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
    max-width: ${viewport.size.xl};
    width: 100%;
    background-color: ${theme.colors.lightBluish};
    border-radius: 15px;
`;

export const ProjectTitleStyled = styled.h3`
    font-size: 1.75rem;
    font-weight: 700;
    margin: 1.75rem auto 0;
`;

export const ProjectDescriptionStyled = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
`;

export const ProjectImageStyled = styled(Image)`
    width: 100%;
`;

export const ButtonContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.lightBluish};
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    width: 100%;
    padding: 2.25rem 0;
`;
