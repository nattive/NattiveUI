import styled from 'styled-components/native';

import { ButtonProps } from './button.interface';
import React from 'react';
import theme from 'shared/theme';

export const StyledButton: React.FC<ButtonProps> = styled.TouchableOpacity`
    height: 50px;
    flex-direction: row;
    alignItems: center;
    min-width: 50%;
    border-width: ${({ variant }: { variant: "outlined" | "filled" | "ghost" }) => variant === 'filled' ? '0px' : '1px'}; 
    background-color: ${({ color, variant }: { color: keyof typeof theme.colors, variant: "outlined" | "filled" | "ghost" }) => variant === 'filled' ? theme.colors[color || 'primary500'] : 'transaprent'}; 
    border-color: ${({ color, variant }: { color: keyof typeof theme.colors, variant: "outlined" | "filled" | "ghost" }) => variant === 'filled' ? "none" : theme.colors[color || 'primary500']}; 
    justifyContent: ${(children: JSX.Element | JSX.Element[]) => Array.isArray(children) ? 'space-between' : 'center'}
`;
