import React from 'react';
import { View } from 'react-native';
import Input from './index';

const meta = {
  label: 'Click Me',
  component: Input,
  argTypes: {},
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={{ justifyContent: 'center', marginTop: 50, padding: 10 }}>
        <Story />
      </View>
    ),
  ],
};

export const Basic = {
  args: {
    label: 'Email',
    showErrorIcon: true,
    hintMessage: 'This is a hint text to help user.',
  },
};
export const ErrorInput = {
  args: {
    label: 'Full Name',
    showErrorIcon: true,
    errorMessage: 'This is a error message.',
  },
};

export default meta;
