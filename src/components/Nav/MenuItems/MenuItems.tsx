import { MenuItemStyled } from './MenuItems.styled';

export interface MenuItemProps {
    item: string;
    active: boolean;
}
export const MenuItem: React.FC<MenuItemProps> = ({ item, active }) => {
    return <MenuItemStyled $active={active}>{item}</MenuItemStyled>;
};
