import { createTheme } from '@mui/material'

import { components } from './components'
import { palette } from './palette'
import { shadows } from './shadows'
import { typography } from './typography'

const theme = createTheme({ typography, palette, shadows, components })

export default theme
