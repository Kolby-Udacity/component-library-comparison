import { FC } from 'react'

import { Box, Typography } from '@mui/material'

export const AppHeader: FC = () => {
  return (
    <Box
      component='header'
      height={69}
      alignItems='center'
      sx={{ display: 'flex', justifyContent: 'center', borderBottom: 1, borderColor: 'divider' }}
    >
      <Typography variant='logo' style={{ textShadow: `2px 2px 0 #F29C9C` }}>
        UI Library Test
      </Typography>
    </Box>
  )
}
