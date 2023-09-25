'use client';

import {
    NavbarWrapperStyled,
    NavbarElipseStyled,
    NavbarMenuItemsWrapperStyled,
    NavbarHamburgerMenuStyled,
} from './Navbar.styles';

import { MenuItem } from './MenuItems/MenuItems';
import elipse from 'public/ellipse-top-nav.svg';
import hamburgerMenu from 'public/hamburger-menu.svg';
import Image from 'next/image';

export const Navbar: React.FC = () => {
    const menuItems = [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Projects', url: '/projects' },
        { name: 'Blog', url: '/blog' },
        { name: 'Contact', url: '/contact' },
    ];
    return (
        <NavbarWrapperStyled>
            <NavbarElipseStyled>
                <Image
                    src={elipse}
                    alt="elipse"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </NavbarElipseStyled>
            <NavbarMenuItemsWrapperStyled>
                {menuItems.map((item) => (
                    <MenuItem key={item.name} item={item.name} active={false} />
                ))}
            </NavbarMenuItemsWrapperStyled>
            <NavbarHamburgerMenuStyled>
                <Image
                    src={hamburgerMenu}
                    alt="hamburger menu"
                    style={{ zIndex: 10 }}
                    width={35}
                />
            </NavbarHamburgerMenuStyled>
        </NavbarWrapperStyled>
    );
};
