import type { NextPage } from 'next'

import { Box, Stack } from '@mui/material'

import { AppHeader } from '../components/app-header'
import { Catalog } from '../features/catalog'
import { ContactForm } from '../features/contact-form'
import { ImageDisplay } from '../features/image-display'

const Home: NextPage = () => {
  return (
    <Stack sx={{ height: '100%' }}>
      <AppHeader />
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Box sx={{ width: '50%', overflow: 'auto' }}>
          <Box sx={{ padding: 4 }}>
            <ContactForm />
          </Box>
          <ImageDisplay />
        </Box>
        <Box sx={{ width: '50%', padding: 4, backgroundColor: '#FBFDFF', overflow: 'auto' }}>
          <Catalog />
        </Box>
      </Box>
    </Stack>
  )
}

export default Home
