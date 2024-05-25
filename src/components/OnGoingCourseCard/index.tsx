import React from 'react'
import Box from 'components/Box'
import { StyledImage } from './OnGoingCourseCard.styled'
import Text from 'components/Text'
import Progress from 'components/Progress'
import { ICourse } from 'interfaces/exam.interface'

type Props = {}

const OnGoingCourseCard = ({ thumbnail, duration, title, totalTests, examId, totalVideos,
    completedVideos }: ICourse) => {
    console.log({ examId });

    return (
        <Box backgroundColor={'white'} borderRadius={'m'} padding={'s'} borderWidth={1} margin={'xs'} borderColor={'grey100'} justifyContent='space-between' flexDirection={'row'}>
            <Box flex={0.3}>
                <StyledImage source={{ uri: thumbnail }} />
            </Box>
            <Box mr='m' flex={0.65} >
                <Text mb='sm' variant='body' fontSize={18} >{title}</Text>
                <Progress progress={20} totalVideos={totalVideos} completedVideos={completedVideos} duration={duration} />
                <Box mt='m' flexDirection={'row'} justifyContent={'space-between'}>
                    <Text variant={'body'} color={'label'}>{totalTests} Test</Text>
                    <Box py='xs' px={'s'} backgroundColor={'primary200'}>
                        <Text>{examId.name}</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OnGoingCourseCard