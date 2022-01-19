import { FC } from 'react'

import { Box, Text } from '@chakra-ui/react'

export const AppHeader: FC = () => {
  return (
    <Box
      as='header'
      borderBottom='1px'
      borderColor='divider'
      display='flex'
      justifyContent='center'
      height='69px'
      alignItems='center'
    >
      <Text as='span' color='blue' fontFamily='Zen Dots' fontSize='2xl' style={{ textShadow: `2px 2px 0 #F29C9C` }}>
        UI Library Test
      </Text>
    </Box>
  )
}
