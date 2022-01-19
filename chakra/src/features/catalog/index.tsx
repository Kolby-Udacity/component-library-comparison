import { FC } from 'react'
import Image from 'next/image'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

import { Box, Button, Stack, Text, Tooltip } from '@chakra-ui/react'

import { Course, courses } from './data'

export const Catalog: FC = () => {
  return (
    <Stack spacing={4}>
      {courses.map((course) => (
        <CourseCard key={course.payload.nodeKey} course={course} />
      ))}
    </Stack>
  )
}

const CourseCard: FC<{ course: Course }> = ({ course }) => {
  if (!course.payload.imageUrl) return null

  return (
    <Box display='flex' height={340} backgroundColor='white' borderRadius='md' boxShadow='lg'>
      <Stack spacing={2} padding={4}>
        <Tooltip label={course.payload.imageUrl}>
          <Box borderRadius='lg' overflow='hidden' width={150} height={140}>
            <Image src={course.payload.imageUrl} width={150} height={140} alt='' />
          </Box>
        </Tooltip>
        <Button size='small' test='yo'>
          Program Details
        </Button>
        <Button variant='outline' size='small'>
          Download Syllabus
        </Button>
      </Stack>
      <Box flex={1} borderLeft='1px' borderColor='divider'>
        <Stack spacing={2} padding={4} marginTop={8}>
          <Text as='h3'>{course.payload.title}</Text>
          <Text as='p' fontSize='xs'>
            {course.payload.shortSummary}
          </Text>
        </Stack>
        <Stack
          backgroundColor='lightBlue'
          borderY='1px'
          borderColor='divider'
          paddingY={2}
          paddingX={4}
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Stack direction='row' alignItems='center' spacing={4}>
            {course.payload.level && (
              <Stack>
                <Text textTransform='capitalize' fontSize='xs'>
                  {course.payload.level}
                </Text>
              </Stack>
            )}
            <Stack>
              <Text textTransform='capitalize' fontSize='xs'>
                {course.payload.displayDuration}
              </Text>
            </Stack>
          </Stack>
          <Stack direction='row' alignItems='center' spacing={1}>
            <Stack direction='row' spacing='1px'>
              <BsStarFill color='#F0BF38' fontSize={14} />
              <BsStarFill color='#F0BF38' fontSize={14} />
              <BsStarFill color='#F0BF38' fontSize={14} />
              <BsStarFill color='#F0BF38' fontSize={14} />
              <BsStarHalf color='#F0BF38' fontSize={14} />
            </Stack>
            <Text fontSize={9}>{course.payload.reviewCount} reviews</Text>
          </Stack>
        </Stack>
        <Stack padding={4} spacing={4}>
          {course.payload.skills && (
            <Stack spacing={1}>
              <Text textTransform='uppercase' fontSize={11} fontWeight='bold' color='blue'>
                Skills Covered
              </Text>
              <Text as='p' fontSize='xs'>
                {course.payload.skills.replace(/,/g, ', ')}
              </Text>
            </Stack>
          )}
          <Stack spacing={1}>
            <Text textTransform='uppercase' fontSize={11} fontWeight='bold' color='blue'>
              Prerequisites
            </Text>
            <Text as='p' fontSize='xs'>
              {course.payload.prerequisites.replace(/,/g, ', ')}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
