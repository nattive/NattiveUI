/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { FormWrapperProps } from '../FormWrapper/FormWrapper.props';

export type FormProps<T extends FieldValues> = {
  form: UseFormReturn<T, any, undefined>;
  // onSubmit: (data: T | any) => void;
  formData: FormWrapperProps<T>[] | undefined[];
};
