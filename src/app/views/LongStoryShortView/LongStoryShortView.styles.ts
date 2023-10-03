import styled from 'styled-components';
import { viewport } from '@styles/theme';
import Image from 'next/image';

export const LongStoryShortSectionContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.625rem;
    margin-right: 0.625rem;
    ${viewport.media.xs} {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

export const StoryTitleStyled = styled.div`
    margin-left: auto;
    margin-right: 0;
`;

export const StoryMainImageWrapperStyled = styled.div`
    position: absolute;
    display: flex;
    justify-content: start;
    left: 0;
    max-width: ${viewport.size.xxl};
    z-index: -1;
    width: 100%;
`;

export const LongStoryShortSectionMainImageStyled = styled(Image)`
    width: 100%;
    height: auto;
`;

export const StoryMainContentWrapperStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DataAnalystSectionStyled = styled.div`
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 0;
    margin-top: 14%;
    padding-bottom: 48%;
`;

export const DataScientistSectionStyled = styled.div`
    display: grid;
    width: 100%;
    height: 0;
    margin-top: 16%;
    padding-bottom: 52%;
`;

export const SoftwareDeveloperSectionStyled = styled.div`
    display: grid;
    width: 100%;
    height: 0;
    margin-top: 16%;
    padding-bottom: 52%;
`;
