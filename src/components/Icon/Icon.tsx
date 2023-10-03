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
    const {
        title,
        src,
        verbose = true,
        $position,
        $alignment,
        $style,
        $labelOrange,
    } = props;
    return (
        <IconContainerStyled
            $position={$position}
            $alignment={$alignment}
            $style={$style}
        >
            <IconImagesWrapperStyled>
                <IconImageStyled src={src} alt={`${title} icon`} />
                <IconShadowImageStyled src={iconShadow} alt="icon shadow" />
            </IconImagesWrapperStyled>
            {verbose ? (
                <IconTextStyled
                    $position={$position}
                    $alignment={$alignment}
                    $labelOrange={$labelOrange}
                >
                    {title}
                </IconTextStyled>
            ) : null}
        </IconContainerStyled>
    );
};
