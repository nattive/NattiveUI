import Box from 'components/Box'
import React, { useCallback } from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet } from 'react-native'
import { StyledImageBackground, StyledPlayImageWrapper } from './video-player.styled'
import { playImage } from 'assets/images'
import { Video, ResizeMode } from 'expo-av';
import { useUpddateVideoProgress } from 'queries/course/hooks'
import { CourseVideo, ISingleCourse } from 'interfaces/exam.interface'

type Props = {
    imageUrl: string
    video?: CourseVideo & { categoryId: string },
    categoryId?: string,
    type?: 'course'
    course?: ISingleCourse
}

export default function Poster({ type, categoryId, imageUrl, video: videoObject, course }: Props) {
    const video = React.useRef(null);
    const { mutate: updateProgress, isPending } = useUpddateVideoProgress()

    const onUpdateProgress = useCallback((secondsViewed: number) => {
        if (type === 'course') {
            updateProgress({
                data: {
                    completed: false,
                    secondsViewed
                },
                params: {
                    id: course?.id as string,
                    categoryId: videoObject?.categoryId as string,
                    videoId: videoObject?.id as string
                }
            })

        }
    }, [type, course])

    const [status, setStatus] = React.useState({});
    if (!videoObject?.id) {
        return (
            <StyledImageBackground imageStyle={{ opacity: 0.6 }} source={{ uri: imageUrl }} resizeMode='cover' resizeMethod='auto' >
                <StyledPlayImageWrapper />
            </StyledImageBackground >
        )
    }

    return (
        <Video
            posterSource={{ uri: imageUrl }}
            posterStyle={styles.video}
            ref={video}
            style={styles.video}
            source={{
                uri: videoObject.url
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            onPlaybackStatusUpdate={status => console.log({ status })}
        />
    )
}


const styles = StyleSheet.create({
    video: {
        width: Dimensions.get('screen').width,
        height: 300,
    }
}); 
