/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Box from '../Box';
import Text from '../Text';
import { PhoneNumberProp } from './PhoneNumber.props';
import { useTheme } from '@shopify/restyle';
import InputWrapper from 'components/InputWrapper';
import theme from 'shared/theme';

const PhoneNumber: React.FC<PhoneNumberProp> = ({
  label,
  isLoading,
  showErrorIcon,
  errorMessage,
  hintMessage,
  value,
  disabled,
  ...rest
}) => {
  // const currentMode = useColorScheme();

  const { colors } = useTheme();
  const styles = StyleSheet.create({
    pressable: {
      marginLeft: 8,
    },
    containerStyle: {
      width: '100%',
      alignItems: 'center',
      padding: 0,
    },
    phoneInput: {
      padding: 0,
      marginLeft: 8,
      borderRadius: 10,
      height: 50,
      alignItems: 'center',
      borderWidth: 1,
      backgroundColor: theme.colors.white,
      borderColor: errorMessage ? theme.colors.error : theme.colors.grey200,
    },
    flagButtonStyle: {
      padding: 0,
      height: 50,
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: theme.colors.white,
      borderColor: errorMessage ? theme.colors.error : theme.colors.grey200,
    },
  });
  return (
    <InputWrapper
      errorMessage={errorMessage}
      hintMessage={hintMessage}
      isLoading={isLoading}
      label={label}
      showErrorIcon={showErrorIcon}
    >
      <PhoneInput
        // ref={phoneInput}
        {...rest}
        onChangeFormattedText={rest.onChangeText}
        flagButtonStyle={styles.flagButtonStyle}
        containerStyle={styles.containerStyle}
        textContainerStyle={styles.phoneInput}
        // codeTextStyle={styles.codeTextStyle}
        defaultValue={value as string}
        defaultCode="NG"
        layout="second"
        withDarkTheme
        autoFocus
        disabled={disabled}
      />

    </InputWrapper>
  );
};

export default PhoneNumber;
