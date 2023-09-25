'use client';
import { styled } from 'styled-components';
import { theme, viewport } from '@/styles/theme';
import { sourceCodePro, inter, openSans } from '@/styles/fonts';

// TopSection of the main page styles
export const TopSectionStyled = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 890px;
    background-color: ${theme.colors.yellowish};
    padding-right: 32px;
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
    margin-top: 68px;
`;

export const LogoWrapperStyled = styled.div`
    margin-left: 32px;
`;

export const ImageWrapperStyled = styled.div`
    max-width: 600px;
    width: 100%;
    height: auto;
    margin-top: 4rem;
`;

export const TopSectionAboutAuthorStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8rem;
    padding-left: 5rem;
`;

export const TopSectionAboutAuthorTextStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AuthorWhoamiOpenTextStyled = styled.span`
    font-family: ${sourceCodePro.style.fontFamily};
    font-size: 2.5rem;
    font-weight: 400;
    color: ${theme.colors.black};
`;
export const AuthorWhoamiCloseTextStyled = styled.span`
    display: flex;
    align-self: flex-end;
    font-family: ${sourceCodePro.style.fontFamily};
    font-size: 2.5rem;
    font-weight: 400;
    color: ${theme.colors.black};
`;

export const AuthorNameTextStyled = styled.span`
    font-family: ${openSans.style.fontFamily};
    font-size: 4.5rem;
    font-weight: 800;
    color: ${theme.colors.black};
    margin-left: 4.25rem;
`;

export const AuthorRoleTextStyled = styled.span`
    font-family: ${inter.style.fontFamily};
    font-size: 4rem;
    font-weight: 600;
    color: ${theme.colors.bluish};
    margin-left: 4.25rem;
`;
export const AuthorSmallCaptinStyled = styled.span`
    font-family: ${openSans.style.fontFamily};
    font-size: 1.5rem;
    font-weight: 800;
    color: ${theme.colors.black};
    margin-left: 4.25rem;
`;

export const MottoBoxStyled = styled.div`
    position: relative;
    max-width: 700px;
    margin-left: 4.25rem;
    margin-top: 2rem;
`;

export const MottoTextStyled = styled.div`
    position: relative;
    font-size: 1.5rem;
    font-weight: 400;
    z-index: 100;
`;
