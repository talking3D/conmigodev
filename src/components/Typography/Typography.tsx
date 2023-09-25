'use client';

import { TypographyStyled, TypographyProps } from './Typography.styles';

export const Typography: React.FC<TypographyProps> = (props) => {
    const { children, as, family, weight, color, size } = props;
    return (
        <TypographyStyled
            as={as || 'span'}
            weight={weight}
            size={size}
            family={family}
            color={color}
        >
            {children}{' '}
        </TypographyStyled>
    );
};
