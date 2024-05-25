import { EmptyImage } from 'assets/images'
import Box from 'components/Box'
import ExamPathCard from 'components/ExamPathCard'
import Pressable from 'components/Pressable'
import Text from 'components/Text'
import Button from 'components/button'
import CourseCard from 'components/course-card'
import { useExams } from 'queries/exams/hook'
import React from 'react'
import { Dimensions, FlatList, Image, RefreshControl } from 'react-native'
import normalize from 'react-native-normalize'


export default function ExamPathList() {
    const { data, isLoading, refetch } = useExams()
    console.log(data);

    const _renderEmptyList = () => {
        return (
            <Box px='m' justifyContent={'center'} alignItems={'center'} height={300} width={Dimensions.get('screen').width - 40}>
                <Image style={{ width: 200, height: 200, resizeMode: 'contain' }} source={EmptyImage} />
                <Text variant={'body'}>You have not applied for any Exams yet!</Text>
                {/* @ts-ignore */}
                <Button onPress={console.log} marginTop='l' text='Register for an exam' width={'80%'} />
            </Box>
        )
    }
    return (
        <Box mx='m' my='l'>
            <Box flexDirection={'row'} justifyContent={'space-between'}>
                <Text fontSize={14} variant={'subheader'}>Exam Path</Text>
                <Pressable>
                    <Text fontSize={14} color={'primary500'} variant={'subheader'}>View All</Text>
                </Pressable>
            </Box>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={data?.data}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
                // contentContainerStyle={{ marginTop: -normalize(50) }}
                horizontal
                renderItem={({ item }) => <ExamPathCard
                    title={item.name}
                    image={item.logo}
                    isSubscribed={item.isSubscribed}
                    key={item.id}
                    id={item.id}
                />}
            />
        </Box>
    )
}