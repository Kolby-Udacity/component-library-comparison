import { FC } from 'react'
import Image from 'next/image'

import { Button, Paper, Rating, Stack, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { Course, courses } from './data'

export const Catalog: FC = () => {
  return (
    <Stack spacing={2}>
      {courses.map((course) => (
        <CourseCard key={course.payload.nodeKey} course={course} />
      ))}
    </Stack>
  )
}

const CourseCard: FC<{ course: Course }> = ({ course }) => {
  if (!course.payload.imageUrl) return null

  return (
    <Paper sx={{ display: 'flex', boxShadow: 3 }} style={{ height: 340 }}>
      <Stack spacing={1} sx={{ padding: 2 }}>
        <Tooltip title={course.payload.imageUrl}>
          <Box sx={{ borderRadius: 2, overflow: 'hidden', width: 150, height: 140 }}>
            <Image src={course.payload.imageUrl} width={150} height={140} alt='' />
          </Box>
        </Tooltip>
        <Button size='small'>Program Details</Button>
        <Button variant='outlined' size='small'>
          Download Syllabus
        </Button>
      </Stack>
      <Box sx={{ flex: 1, borderLeft: 1, borderColor: 'divider' }}>
        <Stack spacing={1} sx={{ padding: 2, marginTop: 4 }}>
          <Typography variant='h2'>{course.payload.title}</Typography>
          <Typography variant='small' component='p'>
            {course.payload.shortSummary}
          </Typography>
        </Stack>
        <Stack
          sx={{
            backgroundColor: 'lightBlue',
            borderTop: 1,
            borderBottom: 1,
            borderColor: 'divider',
            paddingY: 1,
            paddingX: 2,
          }}
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Stack direction='row' alignItems='center' spacing={2}>
            {course.payload.level && (
              <Stack>
                <Typography variant='small' sx={{ textTransform: 'capitalize' }}>
                  {course.payload.level}
                </Typography>
              </Stack>
            )}
            <Stack>
              <Typography variant='small' sx={{ textTransform: 'capitalize' }}>
                {course.payload.displayDuration}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction='row' alignItems='center' spacing={0.5}>
            <Rating sx={{ color: '#F0BF38' }} name='course rating' value={4.5} precision={0.5} size='small' readOnly />
            <Typography variant='tiny'>{course.payload.reviewCount} reviews</Typography>
          </Stack>
        </Stack>
        <Stack sx={{ padding: 2 }} spacing={2}>
          {course.payload.skills && (
            <Stack spacing={0.5}>
              <Typography variant='h3' sx={{ textTransform: 'uppercase' }}>
                Skills Covered
              </Typography>
              <Typography variant='small' component='p'>
                {course.payload.skills.replace(/,/g, ', ')}
              </Typography>
            </Stack>
          )}
          <Stack spacing={0.5}>
            <Typography variant='h3' sx={{ textTransform: 'uppercase' }}>
              Prerequisites
            </Typography>
            <Typography variant='small' component='p'>
              {course.payload.prerequisites.replace(/,/g, ', ')}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  )
}
