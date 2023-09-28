import { viewport } from '@styles/theme';
import styled from 'styled-components';

export const NavbarWrapperStyled = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
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
    max-width: 50px;
    top: -10px;
    right: 0.625rem;
    ${viewport.media.sm} {
        right: 1rem;
        top: -30px;
        max-width: 80px;
    }
    ${viewport.media.md} {
        top: -40px;
        max-width: 100px;
    }
    ${viewport.media.lg} {
        top: -40px;
        max-width: 120px;
    }
    ${viewport.media.xl} {
        top: -60px;
        max-width: 100%;
    }
`;

export const NavbarHamburgerMenuStyled = styled.div`
    display: flex;
    margin-right: 30px;
    ${viewport.media.sm} {
        display: none;
    }
`;
