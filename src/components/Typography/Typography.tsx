'use client';

import { TypographyStyled, TypographyProps } from './Typography.styles';

export const Typography: React.FC<TypographyProps> = (props) => {
    const {
        children,
        as,
        $family,
        $weight,
        $color,
        $size,
        $lineHeight,
        className,
    } = props;

    return (
        <TypographyStyled
            as={as || 'span'}
            $weight={$weight}
            $size={$size}
            $lineHeight={$lineHeight}
            $family={$family}
            $color={$color}
            className={className}
        >
            {children}{' '}
        </TypographyStyled>
    );
};
