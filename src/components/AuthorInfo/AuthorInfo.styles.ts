import styled from 'styled-components';
import { sourceCodePro, openSans, inter } from '@/styles/fonts';
import { theme, viewport } from '@styles/theme';

export const TopSectionAboutAuthorStyled = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 6rem;
    margin-left: 0.625rem;
    ${viewport.media.xs} {
        margin-left: 2rem;
    }
    ${viewport.media.lg} {
        padding-left: 5rem;
    }
`;

export const TopSectionAboutAuthorTextStyled = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 10;
    max-width: 900px;
    margin-top: -4rem;
    ${viewport.media.lg} {
        max-width: 80%;
        margin-top: 0;
    }
`;

export const AuthorWhoamiOpenTextStyled = styled.span`
    font-family: ${sourceCodePro.style.fontFamily};
    font-size: 1.5rem;
    font-weight: 400;
    color: ${theme.colors.black};
    align-self: flex-end;
    margin-bottom: 0.625rem;
    ${viewport.media.xs} {
        margin-right: 2.25rem;
    }
    ${viewport.media.sm} {
        font-size: 1.5;
        margin-right: 12.25rem;
    }
    ${viewport.media.md} {
        font-size: 2rem;
        margin-right: 14.25rem;
    }
    ${viewport.media.lg} {
        font-size: 2rem;
        align-self: flex-start;
    }
    ${viewport.media.xl} {
        font-size: 3.5rem;
    }
    z-index: 10;
`;

export const AuthorWhoamiCloseTextStyled = styled.span`
    display: flex;
    align-self: flex-start;
    margin-left: 1.25rem;
    margin-top: 1rem;
    font-family: ${sourceCodePro.style.fontFamily};
    font-size: 1.5rem;
    font-weight: 400;
    color: ${theme.colors.black};

    ${viewport.media.sm} {
        font-size: 1.5rem;
        margin-right: 18.25rem;
        margin-top: 2rem;
        align-self: flex-end;
    }
    ${viewport.media.md} {
        font-size: 2rem;
        margin-right: 22.25rem;
        margin-top: 2rem;
    }
    ${viewport.media.lg} {
        font-size: 2rem;
        margin-right: 18.25rem;
    }
    ${viewport.media.xl} {
        font-size: 3.5rem;
        margin-right: 28rem;
    }
    z-index: 10;
`;

export const AuthorNameTextStyled = styled.span`
    font-family: ${openSans.style.fontFamily};
    font-size: 1.5rem;
    font-weight: 800;
    color: ${theme.colors.black};
    margin-bottom: 0.5rem;
    min-width: max-content;
    display: block;
    ${viewport.media.sm} {
        font-size: 2.5;
        margin-left: 1rem;
    }
    ${viewport.media.md} {
        margin-left: 1.25rem;
        font-size: 3rem;
    }
    ${viewport.media.xl} {
        font-size: 4.5rem;
    }
`;

export const AuthorRoleTextStyled = styled.span`
    font-family: ${inter.style.fontFamily};
    font-size: 2rem;
    font-weight: 600;
    color: ${theme.colors.bluish};
    z-index: 10;
    ${viewport.media.sm} {
        font-size: 2rem;
        margin-left: 1rem;
    }
    ${viewport.media.md} {
        margin-left: 1.25rem;
        font-size: 2.625rem;
    }
    ${viewport.media.xl} {
        font-size: 4rem;
    }
`;

export const AuthorSmallCaptinStyled = styled.span`
    font-family: ${openSans.style.fontFamily};
    font-size: 1.125rem;
    font-weight: 800;
    color: ${theme.colors.black};
    z-index: 10;
    ${viewport.media.sm} {
        font-size: 1.125rem;
        margin-left: 1rem;
    }
    ${viewport.media.md} {
        margin-left: 1.25rem;
        font-size: 1.5rem;
    }
    ${viewport.media.lg} {
        font-size: 1.5rem;
    }
`;

export const MottoWraperStyled = styled.div`
    display: flex;
    position: relative;
    max-width: 700px;
    margin-top: 2rem;
    padding-right: 1rem;
    ${viewport.media.sm} {
        margin-left: 5rem;
        margin-top: 11%;
    }
    ${viewport.media.md} {
        margin-left: 7.5rem;
        max-width: 70%;
    }
    ${viewport.media.lg} {
        margin-left: 1.125rem;
        margin-top: 15px;
        max-width: 65%;
    }
`;

export const MottoTextStyled = styled.div`
    position: relative;
    font-size: 1rem;
    font-weight: 400;
    z-index: 100;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
    ${viewport.media.lg} {
        font-size: 1.25rem;
        line-height: 2rem;
        margin-top: auto;
    }
    ${viewport.media.xl} {
        font-size: 1.5rem;
        line-height: 2.25rem;
    }
`;

export const MottoFlowerMotiveStyled = styled.div`
    display: block;
    position: absolute;
    top: -80%;
    right: 0;
    transform: rotate(180deg);
    ${viewport.media.xs} {
        top: -120px;
        transform: rotate(210deg);
        right: 10%;
    }
    ${viewport.media.xr} {
        top: -120px;
        transform: rotate(30deg);
        right: 10%;
    }
    ${viewport.media.sm} {
        transform: rotate(0deg);
        left: -70px;
        top: -65px;
    }

    ${viewport.media.lg} {
        display: none;
    }
    z-index: 0;
`;

export const MottoElipseMotiveStyled = styled.div`
    display: none;
    position: absolute;
    top: -30px;
    left: -70px;
    max-width: 35%;
    width: 100%;
    ${viewport.media.lg} {
        display: block;
        top: -20px;
        max-width: 30%;
    }
    ${viewport.media.xl} {
        top: -60px;
    }
    ${viewport.media.xxl} {
        max-width: 30%;
        top: -80px;
    }
`;

export const AuthorImageWrapperDesktopStyled = styled.div`
    display: none;
    position: absolute;
    width: 100%;
    height: auto;
    flex-shrink: 2;
    margin-left: auto;
    margin-top: 50px;
    z-index: 0;
    right: 2rem;
    top: -30%;
    ${viewport.media.sm} {
        top: -28%;
        display: flex;
        max-width: 35%;
    }
    ${viewport.media.lg} {
        margin-top: 8rem;
        max-width: 40%;
    }
    ${viewport.media.xl} {
        max-width: 42%;
    }
`;

export const AuthorImageWrapperMobileStyled = styled.div`
    display: none;
    width: 55%;
    height: auto;
    flex-shrink: 2;
    margin-left: auto;
    margin-right: 2rem;
    margin-top: -10px;
    z-index: 0;
    ${viewport.media.xs} {
        display: flex;
    }
    ${viewport.media.sm} {
        display: none;
    }
`;
