import type { Metadata } from 'next';
import { openSans } from '@/styles/fonts';
import StyledComponentsRegistry from './lib/registry';
import { MainPageLayoutWrapperStyled } from './layout.styles';

import './globals.css';

export const metadata: Metadata = {
    title: 'Krzysztof Skwarski - personal page',
    description:
        'I am a software developer, currently working on aviation projects',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <StyledComponentsRegistry>
                    <MainPageLayoutWrapperStyled>
                        {children}
                    </MainPageLayoutWrapperStyled>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
