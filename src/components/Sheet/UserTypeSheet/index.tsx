import React, { useImperativeHandle, useRef } from 'react';
import { FlatList, ViewStyle } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { t } from 'i18next';
import { UserTypes as UserProps } from '@/components/Sheet/UserTypeSheet/UserTypes';
import { RFValue, widthPixel } from '@/shared/utils/functions';
import Box from '@/components/Box';
import Text from '@/components/Text';
import Pressable from '@/components/Pressable';
import { UserTypes } from '@/redux/service/authentication/types';

const INDICATOR_STYLE: ViewStyle = {
  width: widthPixel(150),
  marginTop: RFValue(20),
};

const CONTAINER_STYLE: ViewStyle = {
  height: '50%',
};

function UserType(props: UserProps) {
  const { innerRef, setSelectedUserTypes, selectedUserType } = props;
  const insets = useSafeAreaInsets();
  const actionSheetRef = useRef<ActionSheetRef>(null);

  // @ts-expect-error typings
  useImperativeHandle(innerRef, () => actionSheetRef.current, []);

  const userTypes = [
    {
      id: 0,
      type: `${t('signUp.individualAgent')}`,
      userType: 3,
    },
    {
      id: 1,
      type: `${t('signUp.propertyAgent')}`,
      userType: 2,
    },
    {
      id: 2,
      type: `${t('signUp.propertyOwner')}`,
      userType: 1,
    },
    {
      id: 3,
      type: `${t('signUp.developer')}`,
      userType: 4,
    },
    {
      id: 4,
      type: `${t('signUp.user')}`,
      userType: 'tenant',
    },
  ];

  const hideModal = () => {
    actionSheetRef.current?.hide();
  };

  const handleSelection = (userType: UserTypes) => {
    setSelectedUserTypes(userType);
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
            data={userTypes}
            keyboardDismissMode="interactive"
            keyboardShouldPersistTaps="handled"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            renderItem={({ item: { id, type }, index }) => (
              <Pressable onPress={() => handleSelection(userTypes[index])}>
                <Box
                  key={id}
                  backgroundColor={selectedUserType === type ? 'primary100' : 'white'}
                  padding="md"
                >
                  <Text variant="bold" fontSize={16}>
                    {type}
                  </Text>
                </Box>
              </Pressable>
            )}
          />
        </Box>
      </Box>
    </ActionSheet>
  );
}

export default UserType;
