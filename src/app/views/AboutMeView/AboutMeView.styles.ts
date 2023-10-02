import styled from 'styled-components';
import { theme, viewport } from '@styles/theme';

export interface HeaderParagraphStyledProps {
    $right?: boolean;
}

export const AboutMeViewContainerStyled = styled.div`
    margin-left: 0.625rem;
    margin-right: 0.625rem;
    ${viewport.media.xs} {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

export const AboutMeViewContentStyled = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
`;

export const AboutMeParagraphWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    margin-bottom: 3.5rem;
    ${viewport.media.sm} {
        margin-left: 2rem;
        margin-right: 2rem;
    }
    ${viewport.media.lg} {
        flex-direction: row;
    }
`;
export const HeaderParagraphStyled = styled.h2<HeaderParagraphStyledProps>`
    font-size: 1.125rem;
    font-weight: 600;
    text-decoration-line: underline;
    text-decoration-color: ${theme.colors.bluish};
    text-decoration-thickness: 0.125rem;
    text-underline-offset: 0.25rem;
    position: relative;
    min-width: 50%;

    ${viewport.media.sm} {
        font-size: 1.75rem;
        text-align: right;
        line-height: 2.25rem;
        text-decoration: none;
        ${(props) =>
            props.$right
                ? `margin-right: auto; padding-left: 2rem; text-align: left; order: -1;`
                : `margin-left: auto; padding-right: 2rem;`}
        padding-top: 1rem;
        ${(props) =>
            props.$right
                ? `
            &::before {
              content: '';
              position: absolute;
              top: 0;
              bottom: 0;
              border: 5px solid ${theme.colors.bluish};
              left: 0;
              right: 80%;
              border-right: none;
              border-bottom: none;
              border-top-left-radius: 22px;
            }
            `
                : `
            &::after {
              content: '';
              position: absolute;
              top: 0;
              bottom: 0;
              right: 0;
              left: 80%;
              border: 5px solid ${theme.colors.bluish};
              border-left: none;
              border-bottom: none;
              border-top-right-radius: 22px;
            }
                
                `}
    }
    ${viewport.media.lg} {
        font-size: 2.25rem;
        text-align: left;
        line-height: 2.75rem;
        padding-right: 1rem;
        padding-left: 2rem;
        padding-top: 2rem;
        order: initial;
        ${(props) =>
            props.$right
                ? `
                text-align: right;
                padding-right: 2rem;
                &::before {
                  display: none;
                }
                &::after {
                  content: '';
                  position: absolute;
                  top: 70%;
                  bottom: 0%;
                  right: 0;
                  left: 70%;
                  border: 5px solid ${theme.colors.bluish};
                  border-left: none;
                  border-top: none;
                  border-bottom-right-radius: 22px;
                    }

          `
                : `&::after {
                  display: none;
                }
                &::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  bottom: 70%;
                  left: 0;
                  right: 70%;
                  border: 5px solid ${theme.colors.bluish};
                  border-right: none;
                  border-bottom: none;
                  border-top-left-radius: 22px;
              }
           `}
    }
`;

export const AboutMeParagraphStyled = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    ${viewport.media.lg} {
        font-size: 1.5rem;
        line-height: 2rem;
    }
`;
