import { FieldError } from "react-hook-form";
import { StyleProp, type TextInputProps as RNTextInputProp, type ViewStyle } from 'react-native';

export interface InputProps extends Omit<RNTextInputProp, 'onChange'> {
  /**
 * Represents the name of the TextInput.
 */
  name?: string;

  /**
   * Text label for the TextInput.
   */
  label?: string;

  /**
   * Component to be rendered on the left side of the TextInput.
   */
  leftComponent?: (color?: string) => React.ReactNode;

  /**
   * Component to be rendered on the right side of the TextInput.
   */
  rightComponent?: (color?: string) => React.ReactNode;


  /**
   *  Component to render in place of hint message
   */
  renderHint?: () => React.ReactNode;


  /**
   * Custom styling for the TextInput component.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Placeholder text displayed when the TextInput is empty.
   */
  placeholder?: string;

  /**
   * Callback function triggered when the text in the input changes.
   */
  onChangeText?: (text: string) => void;

  /**
   * An alternative label for the TextInput.
   */
  altLabel?: string;

  /**
   * Indicates whether the TextInput is in a loading state.
   */
  isLoading?: boolean;

  /**
   * Flag indicating whether the TextInput is used for entering passwords.
   */
  isPassword?: boolean;

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
}