import Image from 'next/image';
import {
    TopSectionStyled,
    TopSectionContentStyled,
    TopSectionHeaderStyled,
    LogoWrapperStyled,
} from './page.styles';
import { AuthorInfo } from '@/components';

import { Navbar } from '@/components';
import logo from 'public/conmigo-logo.svg';

export default function Home() {
    return (
        <TopSectionStyled>
            <TopSectionContentStyled>
                <TopSectionHeaderStyled>
                    <LogoWrapperStyled>
                        <Image
                            src={logo}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt="Conmigo logo"
                        />
                    </LogoWrapperStyled>
                    <Navbar />
                </TopSectionHeaderStyled>
                <AuthorInfo />
            </TopSectionContentStyled>
        </TopSectionStyled>
    );
}
