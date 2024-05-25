import { playImage } from 'assets/images'
import Box from 'components/Box'
import Text from 'components/Text'
import React from 'react'
import normalize from 'react-native-normalize'
import { StyledImageBackground, StyledPlayImageWrapper } from './course-card'
import Progress from 'components/Progress'
import { ICourse } from 'interfaces/exam.interface'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

type Props = ICourse & { isSubscribed: boolean }

export default function CourseCard(props: Props) {
    const router = useRouter()
    return (
        <TouchableOpacity onPress={() => router.push({
            pathname: 'course-details',
            params: { courseId: props.id }
        })}>
            <Box mx='xs' borderWidth={1} borderColor={'grey200'} mt={'ll'} width={normalize(200)}  >
                <StyledImageBackground imageStyle={{ opacity: 0.6 }} source={{ uri: props.thumbnail }} resizeMode='cover' resizeMethod='auto' >
                    <StyledPlayImageWrapper source={playImage} />
                </StyledImageBackground >
                <Box flex={1}  >
                    <Box flex={1} paddingHorizontal={'m'}>
                        <Text variant={'subheader'} fontSize={16}>{props.title}</Text>
                        <Progress completedVideos={props.completedVideos} duration={props.duration} totalVideos={props.totalVideos} progress={20} hideProgress={!props.isSubscribed} />
                    </Box>

                    <Box mt='m' flexDirection={'row'} justifyContent={'space-between'}>
                        <Text ml={'m'} variant={'body'} color={'label'}>{props.totalTests} Test</Text>
                        <Box py='xs' px={'s'} backgroundColor={'primary200'}>
                            <Text>{props.examId.name}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </TouchableOpacity>

    )
}