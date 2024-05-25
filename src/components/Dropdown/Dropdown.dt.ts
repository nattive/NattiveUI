import { FieldError } from 'react-hook-form';
import { ViewStyle } from 'react-native';
import { DropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';

export type T = {
  label: string;
  value: string | number | undefined;
};

/**
 * Represents the type definition for a custom dropdown component.
 * Extends DropdownProps from 'react-native-element-dropdown' library.
 *
 * @typeparam T The type of the value associated with each dropdown item.
 */
export interface DropdownType extends DropdownProps<T> {
  /**
   * Represents the name of the TextInput.
   */
  name?: string;
  /**
   * Optional placeholder text for the dropdown.
   */
  placeholder?: string;

  /**
   * The label text for the dropdown.
   */
  label?: string;

  /**
   * The array of objects representing dropdown options,
   * where each object contains a label and a value.
   */
  data: T[];

  style?: ViewStyle;

  /**
   * Adds search functionality to dropdown
   */
  search?: boolean;

  /**
   * Error message to be displayed when there is an error.
   */
  errorMessage?: FieldError | string;

  /**
   * Hint message to provide additional information or guidance.
   */
  hintMessage?: string;
  isLoading?: boolean;
}
