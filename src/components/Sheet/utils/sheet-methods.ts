import { SheetManager, SheetProps } from 'react-native-actions-sheet';

import { SheetNames, Sheets } from '../config';

type ShowPayload<T> = T extends SheetNames
  ? React.ComponentProps<Sheets[T]> extends SheetProps<infer P>
    ? P
    : never
  : never;

type SheetMethods = {
  hide: <HidePayload>(
    id: SheetNames,
    options?:
      | {
          payload?: HidePayload | undefined;
          context?: string | undefined;
        }
      | undefined
  ) => Promise<HidePayload>;
  hideAll: () => void;
  show: <T extends SheetNames, HidePayload>(
    ...args: ShowPayload<T> extends unknown
      ?
          | [id: T]
          | [
              id: T,
              options: {
                payload: ShowPayload<T>;
                onClose?: (data: HidePayload) => void;
                context?: string;
              },
            ]
      : [
          id: T,
          options: {
            payload: ShowPayload<T>;
            onClose?: (data: HidePayload) => void;
            context?: string;
          },
        ]
  ) => Promise<HidePayload>;
};

const sheetMethods: SheetMethods = {
  // @ts-expect-error error
  hide: (id, options) => SheetManager.hide(id, options),
  hideAll: () => SheetManager.hideAll(),
  // @ts-expect-error error
  show: (id, options) => SheetManager.show(id, options),
};

export default sheetMethods;
