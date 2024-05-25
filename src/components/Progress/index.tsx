import React from 'react'
import Box from 'components/Box'
import Text from 'components/Text'
import { convertSecondsToHHMMSS } from 'helpers/functions'

type Props = { progress: number, completedVideos: number, totalVideos: number, hideProgress?: boolean, duration: string }

const Progress = ({ hideProgress, duration, completedVideos, totalVideos }: Props) => {
    return (
        <Box width={'100%'} >
            {!hideProgress && <Box backgroundColor={'infoLight'} height={3}>
                <Box width={`${Math.floor((completedVideos / totalVideos) * 100)}%`} backgroundColor={'infoDark'} height={3} />
            </Box>}
            <Box flexDirection={'row'} justifyContent={'space-between'}>
                <Text variant={'body'} color={'label'}>{duration}</Text>
                {!hideProgress && <Text variant={'body'} color={'text'}>{completedVideos || 0}/{totalVideos || 0}</Text>}
            </Box>
        </Box>
    )
}

export default Progress