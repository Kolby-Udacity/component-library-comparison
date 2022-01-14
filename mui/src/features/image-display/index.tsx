import { FC } from 'react'
import Image from 'next/image'

import { ImageList, ImageListItem } from '@mui/material'

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
    <ImageList sx={{ width: '100%' }} cols={4} gap={2}>
      {images.map((image) => {
        return (
          <ImageListItem key={image}>
            <div>
              <Image src={image} layout='responsive' width={200} height={200} alt='' priority />
            </div>
          </ImageListItem>
        )
      })}
    </ImageList>
  )
}
