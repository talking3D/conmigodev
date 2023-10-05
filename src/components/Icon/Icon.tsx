'use client';

import React from 'react';
import {
    IconStyledProps,
    IconContainerStyled,
    IconImagesWrapperStyled,
    IconImageStyled,
    IconShadowImageStyled,
    IconTextStyled,
} from './Icon.styles';

import iconShadow from 'public/icons/shadow.png';

type IconProps = IconStyledProps & {
    title: string;
    src: string;
    verbose?: boolean;
};

export const Icon: React.FC<IconProps> = (props) => {
    const { title, src, verbose = true, $style, $labelOrange } = props;
    return (
        <IconContainerStyled $style={$style}>
            {verbose ? (
                <IconTextStyled $labelOrange={$labelOrange}>
                    {title}
                </IconTextStyled>
            ) : null}
            <IconImagesWrapperStyled>
                <IconImageStyled src={src} alt={`${title} icon`} />
                <IconShadowImageStyled src={iconShadow} alt="icon shadow" />
            </IconImagesWrapperStyled>
        </IconContainerStyled>
    );
};
