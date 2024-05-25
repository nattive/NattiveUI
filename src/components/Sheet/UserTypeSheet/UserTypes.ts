import { ActionSheetRef } from 'react-native-actions-sheet';
import { RefObject } from 'react';
import { UserTypes as Props } from '@/redux/service/authentication/types';

export interface UserTypes {
  /**
   * Ref
   */
  innerRef: RefObject<ActionSheetRef>;

  /**
   * Ref
   */
  setSelectedUserTypes: (userType: Props) => void;

  /**
   * Ref
   */
  selectedUserType: string;
}
