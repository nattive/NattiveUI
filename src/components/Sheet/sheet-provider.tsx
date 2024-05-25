import React from 'react';
import { SheetProvider as Provider } from 'react-native-actions-sheet';

type SheetProviderProps = React.ComponentProps<typeof Provider>;

function SheetProvider(props: SheetProviderProps) {
  return <Provider {...props} />;
}

export default SheetProvider;
