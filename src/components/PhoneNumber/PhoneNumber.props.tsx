import { FieldError } from 'react-hook-form';
import PhoneInput from 'react-native-phone-number-input';

export interface PhoneNumberProp extends PhoneInput {
  /**
   * Represents the name of the TextInput.
   */
  name: string;

  /**
   * Text label for the TextInput.
   */
  label?: string;

  /**
   * Indicates whether the TextInput is in a loading state.
   */
  isLoading?: boolean;

  /**
   * Flag to determine whether to display an error icon.
   */
  showErrorIcon?: boolean;

  /**
   * Error message to be displayed when there is an error.
   */
  errorMessage?: FieldError | string;

  /**
   * Hint message to provide additional information or guidance.
   */
  hintMessage?: string;
  /**
   * Current value of the TextInput.
   */
  value?: string;

  disabled?: boolean;
}
