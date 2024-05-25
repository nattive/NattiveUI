import { ActionSheetRef } from 'react-native-actions-sheet';
import { RefObject } from 'react';

export interface CommentProps {
  /**
   * Ref
   */
  innerRef: RefObject<ActionSheetRef>;

  /**
   * Ref
   */
  setSelectedComment: (comment: string) => void;

  /**
   * Ref
   */
  selectedComment: string;

  /**
   * Property ID
   */
  propertyId: string;
}
