import { FieldValues, UseFormReturn } from 'react-hook-form';
import { FormDateInputProp } from '../DatePicker/DatePicker.props';
import { DropdownType } from '../Dropdown/Dropdown.dt';
import { FileUploadProps } from '../FileUpload/FileUpload.props';
import { InputProps } from 'components/input/input.interface';

interface BaseFormWrapperProps<T extends FieldValues> {
  /**
   * Represents the useForm return object from React Hook Form.
   * It provides access to methods and state for the form.
   */
  form: UseFormReturn<T>;

  label?: string;

  disabled?: boolean;

  name?: string;


  inputType: 'TextInput' | 'PhoneNumber' | 'Date' | 'Dropdown' | 'File' | 'QuantityInput';

  /**
 *  Component to render in place of hint message
 */
  renderHint?: () => React.ReactNode;

}

interface FormFileProps<T extends FieldValues>
  extends Omit<BaseFormWrapperProps<T>, 'form'>,
  FileUploadProps {
  inputType: 'File';
}

interface FormTextInputProps<T extends FieldValues>
  extends Omit<BaseFormWrapperProps<T>, 'form'>,
  InputProps {
  inputType: 'TextInput';
}

interface PhoneNumberProps<T extends FieldValues>
  extends Omit<BaseFormWrapperProps<T>, 'form'>,
  InputProps {
  inputType: 'PhoneNumber';
}

interface DateProps<T extends FieldValues>
  extends Omit<BaseFormWrapperProps<T>, 'form'>,
  FormDateInputProp {
  inputType: 'Date';
}
interface DropdownProps<T extends FieldValues>
  extends Omit<BaseFormWrapperProps<T>, 'form'>,
  Omit<DropdownType, 'labelField' | 'valueField' | 'onChange'> {
  inputType: 'Dropdown';
}


// Use a discriminated union to combine the specific input types
export type FormWrapperProps<T extends FieldValues> =
  | FormTextInputProps<T>
  | PhoneNumberProps<T>
  | DateProps<T>
  | FormFileProps<T>
  | DropdownProps<T>;
