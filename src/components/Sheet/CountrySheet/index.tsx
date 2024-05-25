import React, { useImperativeHandle, useRef } from 'react';
import { FlatList, ViewStyle } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RFValue, widthPixel } from '@/shared/utils/functions';
import Box from '@/components/Box';
import Text from '@/components/Text';
import Pressable from '@/components/Pressable';
import countryList from '@/shared/constants/countries';
import { Country as Props } from '@/components/Sheet/CountrySheet/Country';
import { Country } from '@/redux/service/authentication/types';

const INDICATOR_STYLE: ViewStyle = {
  width: widthPixel(150),
  marginTop: RFValue(20),
};

const CONTAINER_STYLE: ViewStyle = {
  height: '98%',
};

function Countries(props: Props) {
  const { innerRef, setSelectedCountryCode } = props;
  const insets = useSafeAreaInsets();
  const actionSheetRef = useRef<ActionSheetRef>(null);

  // @ts-expect-error typings
  useImperativeHandle(innerRef, () => actionSheetRef.current, []);

  const hideModal = () => {
    actionSheetRef.current?.hide();
  };

  const handleSelection = (country: Country) => {
    setSelectedCountryCode(country);
    hideModal();
  };

  return (
    <ActionSheet
      indicatorStyle={INDICATOR_STYLE}
      ref={actionSheetRef}
      gestureEnabled
      safeAreaInsets={insets}
      drawUnderStatusBar
      containerStyle={CONTAINER_STYLE}
    >
      <Box>
        <Box marginVertical="m">
          <FlatList
            data={countryList}
            keyboardDismissMode="interactive"
            keyboardShouldPersistTaps="handled"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            renderItem={({ item: { name, flag, dialCode, code }, index }) => (
              <Pressable onPress={() => handleSelection({ name, flag, dialCode, code })}>
                <Box key={index}>
                  <Box padding="s">
                    <Text variant="bold" fontSize={14}>
                      {flag} {name} ({dialCode})
                    </Text>
                  </Box>

                  <Box height={2} backgroundColor="grey100" marginVertical="s" />
                </Box>
              </Pressable>
            )}
          />
        </Box>
      </Box>
    </ActionSheet>
  );
}

export default Countries;
