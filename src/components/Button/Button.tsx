'use client';

import React from 'react';
import { ButtonStyled } from './Button.styles';

export type ButtonPropsType = {
    children: React.ReactNode;
};

export const Button: React.FC<ButtonPropsType> = ({ children }) => {
    return <ButtonStyled>{children}</ButtonStyled>;
};
