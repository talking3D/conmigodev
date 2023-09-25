import { viewport } from '@styles/theme';
import styled from 'styled-components';

export const NavbarWrapperStyled = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    margin-left: 4.25rem;
    /* max-width: 662px; */
    width: 100%;
    justify-content: flex-end;
`;

export const NavbarMenuItemsWrapperStyled = styled.div`
    display: none;
    flex-direction: row;
    justify-content: space-around;
    max-width: 662px;
    width: 100%;
    align-self: end;
    ${viewport.media.sm} {
        display: flex;
    }
`;

export const NavbarElipseStyled = styled.div`
    position: absolute;
    max-width: 60px;
    right: -20px;
    top: -30px;
    ${viewport.media.sm} {
        right: -20px;
        top: -30px;
        max-width: 80px;
    }
    ${viewport.media.md} {
        right: -20px;
        top: -40px;
        max-width: 100px;
    }
    ${viewport.media.lg} {
        right: -20px;
        top: -40px;
        max-width: 120px;
    }
    ${viewport.media.xl} {
        right: -40px;
        top: -60px;
        max-width: 100%;
    }
    /* z-index: 1; */
`;

export const NavbarHamburgerMenuStyled = styled.div`
    display: flex;
    margin-right: 10px;
    margin-top: -15px;
    ${viewport.media.sm} {
        display: none;
    }
`;
