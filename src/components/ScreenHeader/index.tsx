import React from 'react'
import Box from 'components/Box'
import { Ionicons } from '@expo/vector-icons'
import Text from 'components/Text'
import Pressable from 'components/Pressable'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const ScreenHeader = (props: any) => {
    const inset = useSafeAreaInsets()
    return (
        <Box backgroundColor={'white'} borderBottomWidth={1} borderColor={'grey200'} p='sm' style={{ paddingTop: inset.top }} flexDirection={'row'}>
            <Box flexDirection={'row'} justifyContent={'center'}
                alignItems={'center'}>
                {props.navigation?.canGoBack() && <Pressable onPress={props.navigation.goBack} p='sm'>
                    <Ionicons name="chevron-back-outline" size={24} color="black" />
                </Pressable>}
                <Text ml={'s'} fontSize={16} variant='subheader'>{props.options?.title}</Text>

            </Box>
        </Box>
    )
}

export default ScreenHeader