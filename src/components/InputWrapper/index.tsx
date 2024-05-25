/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { ActivityIndicator, useColorScheme } from 'react-native';
import Box from '../Box';
import Text from '../Text';
import { InputWrapperProps } from './input-wrapper.interface';
import { useTheme } from '@shopify/restyle';
import { Feather } from '@expo/vector-icons';
import Pressable from 'components/Pressable';

const InputWrapper: React.FC<InputWrapperProps> = ({
  label,
  leftComponent,
  rightComponent,
  isLoading,
  children,
  showErrorIcon,
  errorMessage,
  hintMessage,
  renderHint
}) => {
  const currentMode = useColorScheme();

  const { colors } = useTheme();

  return (
    <Box>
      {!!label && (
        <Text mb="s" fontSize={14}>
          {label}
        </Text>
      )}
      <Box
        flexDirection="row"
        alignItems="center"
        padding="s"
        borderWidth={1}
        backgroundColor="white"
        borderRadius="sm"
        borderColor={errorMessage ? 'error' : 'grey200'}
      >
        {typeof leftComponent === 'function' && (
          <Pressable mx='s'>
            {leftComponent()}
          </Pressable>
        )}
        {children}
        {(typeof rightComponent === 'function' || showErrorIcon) && (
          <Pressable mx='m'>
            {showErrorIcon && !!errorMessage ? (
              <Feather name='alert-circle' color={colors.error} />
            ) : (
              typeof rightComponent === 'function' && rightComponent()
            )}
          </Pressable>
        )}
        {!!isLoading && <ActivityIndicator color={colors.primary100} size="small" />}
      </Box>
      {renderHint ? renderHint() : hintMessage && (
        <Text my="s" color="grey500" fontSize={14}>
          {hintMessage}
        </Text>
      )}
      {errorMessage && (
        <Text mb="s" color="error" fontSize={14}>
          {errorMessage.toString()}
        </Text>
      )}
    </Box>
  );
};


export default InputWrapper;
