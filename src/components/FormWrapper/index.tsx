/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Controller, FieldError, FieldValues, UseFormReturn } from 'react-hook-form';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { FormWrapperProps } from './FormWrapper.props';
import DatePickerInput from '../DatePicker';
import DropdownComponent from '../Dropdown';
import FileUpload from '../FileUpload';
import PhoneNumber from '../PhoneNumber';
import Input from 'components/input';

export default function FormWrapper<T extends FieldValues>({
  name,
  form,
  inputType,
  label,
  disabled,
  renderHint,
  ...rest
}: FormWrapperProps<T> & { form: UseFormReturn<T> }) {
  const {
    control,
    formState: { errors },
  } = form;
  const emailError = errors[name as string]?.message;

  const renderComponent = ({
    onChange,
    onBlur,
    value,
  }: {
    onChange: (e: Date | string | undefined | T | number) => void;
    onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    value: string | undefined | T;
  }) => {
    switch (inputType) {
      case 'TextInput':
        return (
          <Input
            editable={!disabled}
            label={label}
            name={name as string}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value as any}
            placeholder={rest.placeholder}
            errorMessage={emailError as FieldError}
            renderHint={renderHint}
            {...rest}
          />
        );
        break;
      case 'PhoneNumber':
        return (
          // @ts-expect-error phone
          <PhoneNumber
            value={value as any}
            onChangeText={(text: string) => {
              onChange(text);
            }}
            name={name as string}
            label={label}
            placeholder={rest.placeholder}
            errorMessage={emailError as FieldError}
            disabled={disabled}
            {...rest}
          />
        );
        break;
      case 'Date':
        return (
          <DatePickerInput
            errorMessage={emailError as FieldError}
            label={label}
            name={name}
            disabled={disabled}
            // @ts-expect-error: incompatible type emailError
            onChange={onChange}
            value={value as any}
            {...rest}
          />
        );
        break;
      case 'Dropdown':
        return (
          <DropdownComponent
            label={label}
            errorMessage={emailError as FieldError}
            name={name}
            disable={disabled}
            // @ts-expect-error: incompatible type
            onChange={onChange}
            // @ts-expect-error: incompatible type
            value={value}
            {...rest}
          />
        );
        break;
      case 'File':
        return (
          <></>
        );
        break;

      default:
        return (
          <Input
            label={label}
            name={name}
            onBlur={onBlur}
            onChangeText={onChange}
            // @ts-expect-error: type error
            value={value}
            placeholder={rest.placeholder}
            errorMessage={emailError as FieldError}
            {...rest}
          />
        );
        break;
    }
  };

  return (
    <Controller
      name={name as never}
      control={control}
      render={({ field: { onChange, onBlur, value } }) =>
        renderComponent({ onChange, onBlur, value })
      }
    />
  );
}
