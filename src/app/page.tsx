import Image from 'next/image';
import {
    TopSectionStyled,
    TopSectionContentStyled,
    TopSectionHeaderStyled,
    LogoWrapperStyled,
    AboutMeSectionStyled,
    LongStoryShortSectionStyled,
    ProjectsSectionStyled,
    ContactFormSectionStyled,
} from './page.styles';

import { AuthorInfo } from '@/components';
import { Navbar } from '@/components';
import {
    AboutMeView,
    LongStoryShortView,
    ProjectsView,
    ContactFormView,
} from './views';
import logo from 'public/conmigo-logo.svg';

export default function Home() {
    return (
        <>
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
            <AboutMeSectionStyled>
                <AboutMeView />
            </AboutMeSectionStyled>
            <LongStoryShortSectionStyled>
                <LongStoryShortView />
            </LongStoryShortSectionStyled>
            <ProjectsSectionStyled>
                <ProjectsView />
            </ProjectsSectionStyled>
            <ContactFormSectionStyled>
                <ContactFormView />
            </ContactFormSectionStyled>
        </>
    );
}
