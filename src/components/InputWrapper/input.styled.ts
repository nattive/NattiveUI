import styled from 'styled-components/native';
import theme from '../../shared/theme';
import { InputProps } from './input-wrapper.interface';
import React from 'react';
import { TextInput } from 'react-native';

export const StyledInput: typeof TextInput = styled.TextInput`
`;

export const StyledInputContainer = styled.View`
  padding-vertical: ${theme.spacing.m};
  padding-horizontal: ${theme.spacing.xs};
  border-width: 1px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  borderColor: ${theme.colors.primary200};
`;
