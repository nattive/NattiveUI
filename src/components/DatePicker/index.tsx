/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Box from '../Box';
import Text from '../Text';
import { FormDateInputProp } from './DatePicker.props';
import Pressable from '../Pressable';
import { useTheme } from '@shopify/restyle';
import { formatDate, formatTime } from 'helpers/functions';
import { AntDesign, Feather } from '@expo/vector-icons';
import theme from 'shared/theme';
import InputWrapper from 'components/InputWrapper';

const DatePickerInput: React.FC<FormDateInputProp> = ({
  label,
  isLoading,
  showErrorIcon,
  errorMessage,
  hintMessage,
  onChange,
  value,
  ...rest
}) => {
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <InputWrapper
      containerStyle={rest.style}
      errorMessage={errorMessage}
      hintMessage={hintMessage}
      isLoading={isLoading}
      label={label}
      showErrorIcon={showErrorIcon}
    >
      <Pressable
        onPress={() => setOpen(true)}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="s"
        borderWidth={1}
        borderRadius="sm"
        backgroundColor="primary100"
        borderColor={errorMessage ? 'error' : 'label'}
      >
        <Text color={value ? 'text' : 'label'} mb="s" fontSize={14}>
          {/* eslint-disable-next-line no-nested-ternary */}
          {value
            ? rest.mode === 'time'
              ? formatTime(value)
              : formatDate(new Date(value))
            : rest.mode === 'time'
              ? '--:-- PM'
              : 'mm dd, yyyy'}
        </Text>
        <Box flexDirection="row">
          {rest.mode === 'time' ? (
            <AntDesign name="clockcircleo" size={24} color={theme.colors.label} />) : (
            <AntDesign name="calendar" size={24} color={theme.colors.label} />
          )}
          {showErrorIcon && (
            <View style={{ marginLeft: 8 }}>
              <Feather name="alert-circle" size={24} color={theme.colors.error} />            </View>
          )}
          {!!isLoading && <ActivityIndicator color={colors.grey200} size="small" />}
        </Box>
      </Pressable>

      <DatePicker
        modal
        mode={rest.mode}
        open={open}
        date={date}
        onConfirm={(d) => {
          setOpen(false);
          onChange?.(d);
          setDate(d);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </InputWrapper>
  );
};

export default DatePickerInput;
