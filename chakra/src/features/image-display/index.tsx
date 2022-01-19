import { FC } from 'react'
import Image from 'next/image'

import { Grid, GridItem, Tooltip } from '@chakra-ui/react'

const images = [
  'https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud894_thumbnail.jpg',
  'https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud109_thumbnail.jpg',
  'https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud283_thumbnail.jpg',
  'https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud388_thumbnail.jpg',
  'https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud098_thumbnail.jpg',
  'https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud803_thumbnail.jpg',
  'https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud576_thumbnail.jpg',
  'https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud1030_thumbnail.jpg',
  'https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud1022_thumbnail.jpg',
  'https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/st101_thumbnail.jpg',
  'https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud001_thumbnail.jpg',
  'https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/ud851_thumbnail.jpg',
]

export const ImageDisplay: FC = () => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={0.5}>
      {images.map((image) => {
        return (
          <Tooltip label={image} key={image}>
            <GridItem key={image}>
              <div>
                <Image src={image} layout='responsive' width={200} height={200} alt='' priority />
              </div>
            </GridItem>
          </Tooltip>
        )
      })}
    </Grid>
  )
}
