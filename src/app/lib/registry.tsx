'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStylesheet] = useState(() => new ServerStyleSheet());

    // useServerInsertedHTML hook to inject rules before any content that might use them
    useServerInsertedHTML(() => {
        const styles = styledComponentsStylesheet.getStyleElement();
        styledComponentsStylesheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined') {
        return <>{children}</>;
    }

    return (
        <StyleSheetManager sheet={styledComponentsStylesheet.instance}>
            {children}
        </StyleSheetManager>
    );
}
