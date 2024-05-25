import React, { useImperativeHandle } from 'react';
import { ActivityIndicator, FlatList, ViewStyle } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/core';
import { RFValue, widthPixel } from '@/shared/utils/functions';
import Box from '@/components/Box';
import { CommentProps } from '@/components/Sheet/Comments/Comment';
import Pressable from '@/components/Pressable';
import Text from '@/components/Text';
import { SVGs } from '@/assets/icons';
import Button from '@/components/Button';
import { ROOT_ROUTES } from '@/navigation/routes';
import { useGetBriefReviews } from '@/queries/briefs/hook';
import { getFullName } from '@/shared/utils/functions/helpers';
// import countryList from '@/shared/constants/countries';

const INDICATOR_STYLE: ViewStyle = {
  width: widthPixel(150),
  marginTop: RFValue(20),
};

const CONTAINER_STYLE: ViewStyle = {
  height: '60%',
};

const FLAT_LIST: ViewStyle = {
  height: '80%',
};

function Comments(props: CommentProps) {
  const { innerRef, propertyId } = props;
  const insets = useSafeAreaInsets();
  const actionSheetRef = React.createRef<ActionSheetRef>();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { reviews, refetch, isLoading } = useGetBriefReviews(propertyId);

  useImperativeHandle(innerRef, () => actionSheetRef.current as ActionSheetRef, []);

  // const hideModal = () => {
  // 	actionSheetRef.current?.hide();
  // };

  // const handleSelection = (country: Country) => {
  // 	hideModal();
  // };

  return (
    <ActionSheet
      onOpen={refetch}
      indicatorStyle={INDICATOR_STYLE}
      ref={actionSheetRef}
      gestureEnabled
      safeAreaInsets={insets}
      drawUnderStatusBar
      containerStyle={CONTAINER_STYLE}
    >
      <Box>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Box marginVertical="m">
            <FlatList
              data={reviews}
              // data={countryList}
              keyboardDismissMode="interactive"
              keyboardShouldPersistTaps="handled"
              showsHorizontalScrollIndicator={false}
              bounces={false}
              ListEmptyComponent={
                <Box justifyContent="center" alignItems="center">
                  <SVGs.EmptyReview />

                  <Box>
                    <Text color="grey300" fontSize={15} textAlign="center" variant="Title2">
                      {t('briefs.noReview')}
                    </Text>

                    <Box marginTop="s">
                      <Text color="grey300" fontSize={15} textAlign="center">
                        {t('briefs.noConversation')}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              }
              renderItem={({ index, item }) => (
                <Pressable
                  key={index}
                  // onPress={() => handleSelection({  })}
                >
                  <Box borderRadius="mm" marginVertical="xs" marginHorizontal="m">
                    <Box>
                      <Box flex={1} flexDirection="row" justifyContent="space-between">
                        <Box flex={0.9} alignItems="center" flexDirection="row">
                          <Box
                            backgroundColor="grey500"
                            height={24}
                            width={24}
                            borderRadius="mm"
                            marginVertical="sm"
                          />

                          <Box marginTop="s" marginLeft="s">
                            <Text variant="Title4Bold" fontSize={14} color="textDark">
                              {getFullName(item.user)} · {item.created_at}
                            </Text>

                            <Box width="90%">
                              <Text color="textDark">{item.comment}</Text>
                            </Box>
                          </Box>
                        </Box>

                        <Box
                          flex={0.1}
                          flexDirection="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <SVGs.Star />

                          <Text color="grey300" fontSize={11}>
                            {item.rating}
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Pressable>
              )}
              style={FLAT_LIST}
            />

            <Box marginTop="l" marginHorizontal="m">
              <Button
                backgroundColor="primary"
                text={t('briefs.leaveReview')}
                variant="solid"
                onPress={() => {
                  // @ts-expect-error structure
                  actionSheetRef.current.hide();
                  navigation.navigate(ROOT_ROUTES.LEAVE_REVIEW, { propertyId });
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </ActionSheet>
  );
}

export default Comments;
