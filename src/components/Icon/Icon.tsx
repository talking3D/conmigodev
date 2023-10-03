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

type IconProps = IconStyledProps & { title: string; src: string };

export const Icon: React.FC<IconProps> = (props) => {
    const { title, src, $position, $alignment, $style } = props;
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
            <IconTextStyled $position={$position} $alignment={$alignment}>
                {title}
            </IconTextStyled>
        </IconContainerStyled>
    );
};
