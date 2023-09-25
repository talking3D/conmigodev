import styled from 'styled-components';
import { theme, viewport } from '@/styles/theme';

interface MenuItemProps {
    $active: boolean;
}

export const MenuItemStyled = styled.div<MenuItemProps>`
    color: ${(props) =>
        props.$active ? theme.colors.bluish : theme.colors.black};
    font-size: 1rem;
    font-weight: 600;
    ${viewport.media.md} {
        font-size: 1.15rem;
        font-weight: 600;
    }
    ${viewport.media.lg} {
        font-size: 1.2rem;
        font-weight: 700;
    }
    ${viewport.media.xl} {
        font-size: 1.5rem;
        font-weight: 800;
    }
    z-index: 1;
`;
