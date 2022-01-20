import { extendTheme } from '@chakra-ui/react'
import { Styles } from '@chakra-ui/theme-tools'

import { components } from './components'

const styles: Styles = {
  global: {
    'html, body, #__next': {
      height: '100%',
      color: 'textColor',
    },
    h3: {
      fontSize: 'lg',
      fontWeight: 'bold',
    },
  },
}

const colors = {
  blue: '#006F8E',
  purple: '#9A49D4',
  textColor: '#2e3d49',
  lightBlue: '#F5FAFD',
  divider: '#DBE2E8',
}

const fonts = {
  body: 'Open Sans, sans-serif',
  heading: 'Open Sans, sans-serif',
}

const shadows = {
  base: '5px 5px 10px 0 rgba(46, 61, 73, .05)',
  md: '0 4px 8px 0 rgb(17 22 26 / 16%), 0 4px 8px 0 rgb(17 22 26 / 8%), 0 8px 16px 0 rgb(17 22 26 / 4%)',
  lg: '0px 5px 25px 0px rgba(21, 34, 58, 0.13)',
}

const defaultTheme = {
  styles,
  colors,
  fonts,
  shadows,
  components,
}

export const theme = extendTheme(defaultTheme)
