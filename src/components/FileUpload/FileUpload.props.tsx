import { FieldError } from 'react-hook-form';
import { StyleProp, type ViewStyle } from 'react-native';
import { DocumentPickerAsset, DocumentPickerOptions } from 'expo-document-picker';

export interface FileUploadProps extends DocumentPickerOptions {
  /**
   * Represents the name of the TextInput.
   */
  name?: string;

  /**
   * Text label for the TextInput.
   */
  label?: string;

  /**
   * Custom styling for the TextInput component.
   */
  style?: StyleProp<ViewStyle>;

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
  placeholder?: string;

  accept: 'Image' | 'Video' | 'doc';

  onChange?: (e: DocumentPickerAsset | DocumentPickerAsset[] | null) => void;
}

export interface DocumentAsset extends DocumentPickerAsset {
  type: string | undefined;
}
