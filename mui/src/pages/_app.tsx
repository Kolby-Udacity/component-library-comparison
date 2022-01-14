import type { AppProps } from 'next/app'

import { ThemeProvider } from '@mui/material/styles'

import theme from '../theme'

import 'normalize.css/normalize.css'
import '../global-styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
