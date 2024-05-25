import React from 'react'
import Box from 'components/Box'
import { StyledAvatar } from './profile-avatar.styled'
import Pressable from 'components/Pressable'
import CameraIcon from 'components/icons/CameraIcon'
import Text from 'components/Text'

type Props = {}

const ProfileAvatar = (props: Props) => {
    return (
        <>
            <Box justifyContent={'center'} alignItems={'center'}>
                <Box>
                    <StyledAvatar source={{
                        uri:
                            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfH'
                    }} />
                    <Pressable bottom={-15} right={0} position={'absolute'} justifyContent={'center'} alignItems={'center'} width={50} height={50} borderRadius={'lg'} backgroundColor={'primary500'}>
                        <CameraIcon size={25} />
                    </Pressable>
                </Box>
            </Box>
            <Box mt='l' justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={22} variant={'body'}>Ronaldo Nazario</Text>
                <Box mt='s' backgroundColor={'primary200'} px='m' borderRadius={'m'} justifyContent={'center'} alignItems={'center'}>
                    <Text variant={'body'}>Bookish</Text>
                </Box>
            </Box>
        </>

    )
}

export default ProfileAvatar