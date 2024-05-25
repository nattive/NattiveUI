/* eslint-disable no-restricted-syntax */
import { registerSheet } from 'react-native-actions-sheet';

import { FrequencySheet } from './index';

const sheets = {
  'user-type': FrequencySheet,
} as const;

export type Sheets = typeof sheets;
export type SheetNames = keyof Sheets;

for (const sheet of Object.keys(sheets) as Array<SheetNames>) {
  registerSheet(sheet, sheets[sheet]);
}

export {};
