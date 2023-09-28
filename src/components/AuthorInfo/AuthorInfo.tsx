'use client';

import React from 'react';
import Image from 'next/image';
import mottoElipse from 'public/motto-ellipse.svg';
import flower from 'public/flower.svg';
import authorPhoto from 'public/author-photo.png';

import {
    TopSectionAboutAuthorTextStyled,
    AuthorWhoamiOpenTextStyled,
    AuthorWhoamiCloseTextStyled,
    AuthorNameTextStyled,
    AuthorRoleTextStyled,
    AuthorSmallCaptinStyled,
    MottoWraperStyled,
    MottoTextStyled,
    MottoFlowerMotiveStyled,
    MottoElipseMotiveStyled,
    TopSectionAboutAuthorStyled,
    AuthorImageWrapperDesktopStyled,
    AuthorImageWrapperMobileStyled,
} from './AuthorInfo.styles';

export const AuthorInfo: React.FC = () => {
    return (
        <TopSectionAboutAuthorStyled>
            <TopSectionAboutAuthorTextStyled>
                <AuthorWhoamiOpenTextStyled>
                    &lt;whoami&gt;
                </AuthorWhoamiOpenTextStyled>
                <AuthorNameTextStyled>Krzysztof Skwarski</AuthorNameTextStyled>
                <AuthorRoleTextStyled>Software Developer</AuthorRoleTextStyled>
                <AuthorSmallCaptinStyled>
                    business focused
                </AuthorSmallCaptinStyled>
                <AuthorWhoamiCloseTextStyled>
                    &lt;&#47;whoami&gt;
                </AuthorWhoamiCloseTextStyled>
                <MottoWraperStyled>
                    <MottoElipseMotiveStyled>
                        <Image
                            src={mottoElipse}
                            alt="motto elipse"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </MottoElipseMotiveStyled>
                    <MottoFlowerMotiveStyled>
                        <Image src={flower} alt="flower" />
                    </MottoFlowerMotiveStyled>
                    <MottoTextStyled>
                        The software should always meet the business objectives
                        set. Otherwise, it becomes a hobbyist toy for
                        enthusiastic geeks. And to make it clear - there is
                        nothing wrong with being a geek.
                    </MottoTextStyled>
                </MottoWraperStyled>
            </TopSectionAboutAuthorTextStyled>
            <AuthorImageWrapperMobileStyled>
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
            </AuthorImageWrapperMobileStyled>
            <AuthorImageWrapperDesktopStyled>
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
            </AuthorImageWrapperDesktopStyled>
        </TopSectionAboutAuthorStyled>
    );
};
