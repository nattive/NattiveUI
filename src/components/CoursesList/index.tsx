import { EmptyImage } from 'assets/images'
import Box from 'components/Box'
import Pressable from 'components/Pressable'
import Text from 'components/Text'
import Button from 'components/button'
import CourseCard from 'components/course-card'
import { useGetCourses } from 'queries/exams/hook'
import React from 'react'
import { Dimensions, FlatList, Image } from 'react-native'
import normalize from 'react-native-normalize'

type Props = {}

export default function CoursesList({ isSubscribed = false }: { isSubscribed?: boolean }) {
    const { data, isLoading } = useGetCourses(isSubscribed)
    const courses = data?.pages.flatMap((ppd) => ppd.data);


    const _renderEmptyList = () => {
        return (
            <Box px='m' justifyContent={'center'} alignItems={'center'} height={300} width={Dimensions.get('screen').width - 40}>
                <Image style={{ width: 200, height: 200, resizeMode: 'contain' }} source={EmptyImage} />
                <Text variant={'body'}>You have not applied for any Exams yet!</Text>
                <Button marginTop='l' text='Register for an exam' width={'80%'} />
            </Box>
        )
    }
    return (
        <Box mx='m' mt='l'>
            <Box flexDirection={'row'} justifyContent={'space-between'}>
                <Text fontSize={14} variant={'subheader'}>{isSubscribed ? 'Your Courses' : 'Top Courses'}</Text>
                <Pressable>
                    <Text fontSize={14} color={'primary500'} variant={'subheader'}>View All</Text>
                </Pressable>
            </Box>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={courses}
                contentContainerStyle={{ marginTop: -normalize(50) }}
                horizontal
                ListEmptyComponent={_renderEmptyList()}
                renderItem={({ item }) => <CourseCard
                    isSubscribed={isSubscribed}
                    {...item}
                    key={item.id}
                />}
            />
        </Box>
    )
}