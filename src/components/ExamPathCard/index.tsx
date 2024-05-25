import Box from 'components/Box'
import Pressable from 'components/Pressable'
import Text from 'components/Text'
import { router } from 'expo-router'
import React from 'react'
import { StyledImage } from './exam-card.styled'

type Props = {
    image: string;
    title: string;
    id: string;
    isSubscribed?: boolean
}

const ExamPathCard = (props: Props) => {
    return (
        <Pressable onPress={() => router.push({ pathname: "exam-path-details", params: { id: props.id } })} justifyContent={'center'} alignItems={'center'} marginHorizontal='s'  >
            <Box borderColor='grey200' borderRadius='m' borderWidth={1} padding={'s'}>
                <StyledImage source={{ uri: props.image }} />
            </Box>
            <Text my='xs' textTransform={'uppercase'} variant={'body'}>{props.title}</Text>
            {props.isSubscribed && <Box backgroundColor={'primary100'} p='xs' borderRadius={'md'}>
                <Text my='xs' color={'primary500'} fontSize={12} variant={'body'}>Subscribed</Text>
            </Box>}
        </Pressable>
    )
}

export default ExamPathCard