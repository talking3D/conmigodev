import Image from 'next/image';
import {
    TopSectionStyled,
    TopSectionContentStyled,
    TopSectionHeaderStyled,
    LogoWrapperStyled,
    ImageWrapperStyled,
    TopSectionAboutAuthorStyled,
    TopSectionAboutAuthorTextStyled,
    AuthorWhoamiOpenTextStyled,
    AuthorWhoamiCloseTextStyled,
    AuthorNameTextStyled,
    AuthorRoleTextStyled,
    AuthorSmallCaptinStyled,
    MottoBoxStyled,
    MottoTextStyled,
} from './page.styles';

import { Navbar, Typography } from '@/components';
import logo from 'public/conmigo-logo.svg';
import mottoElipse from 'public/motto-ellipse.svg';
import authorPhoto from 'public/author-photo.png';

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
                <TopSectionAboutAuthorStyled>
                    <TopSectionAboutAuthorTextStyled>
                        <AuthorWhoamiOpenTextStyled>
                            &lt;whoami&gt;
                        </AuthorWhoamiOpenTextStyled>
                        <AuthorNameTextStyled>
                            Krzysztof Skwarski
                        </AuthorNameTextStyled>
                        <AuthorRoleTextStyled>
                            Software Developer
                        </AuthorRoleTextStyled>
                        <AuthorSmallCaptinStyled>
                            business focused
                        </AuthorSmallCaptinStyled>
                        <AuthorWhoamiCloseTextStyled>
                            &lt;&#47;whoami&gt;
                        </AuthorWhoamiCloseTextStyled>
                        <MottoBoxStyled>
                            <Image
                                src={mottoElipse}
                                alt="motto elipse"
                                style={{
                                    position: 'absolute',
                                    top: -48,
                                    left: -72,
                                }}
                            />

                            <MottoTextStyled>
                                The software should always meet the business
                                objectives set. Otherwise, it becomes a hobbyist
                                toy for enthusiastic geeks. And to make it clear
                                - there is nothing wrong with being a geek.
                            </MottoTextStyled>
                        </MottoBoxStyled>
                    </TopSectionAboutAuthorTextStyled>
                    <ImageWrapperStyled>
                        <Image
                            src={authorPhoto}
                            alt="Author"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            width={600}
                            height={624}
                        />
                    </ImageWrapperStyled>
                </TopSectionAboutAuthorStyled>
            </TopSectionContentStyled>
        </TopSectionStyled>
    );
}
