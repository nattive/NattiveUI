import { ActionSheetRef } from 'react-native-actions-sheet';
import { RefObject } from 'react';
import { Country as CountryProps } from '@/redux/service/authentication/types';

export interface Country {
  /**
   * Ref
   */
  innerRef: RefObject<ActionSheetRef>;

  /**
   * Ref
   */
  setSelectedCountryCode: (country: CountryProps) => void;

  /**
   * Ref
   */
  selectedCountryCode: string;
}
