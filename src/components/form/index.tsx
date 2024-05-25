/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { FormProps } from './form.interface';
import FormWrapper from '../FormWrapper';
import Box from '../Box';

function Form<T extends FieldValues>({ formData, form }: FormProps<T>) {
  return (
    <>
      {formData.map((fd, index) =>
        fd === undefined ? (
          <Box key={index} />
        ) : (
          <Box key={index} my="sm">
            <FormWrapper<T> {...fd} form={form} key={index} label={fd.label} />
          </Box>
        )
      )}
    </>
  );
}

export default Form;
