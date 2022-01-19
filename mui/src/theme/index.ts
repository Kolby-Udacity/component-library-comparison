import { createTheme } from '@mui/material'

import { components } from './components'
import { palette } from './palette'
import { shadows } from './shadows'
import { typography } from './typography'

const defaultTheme = { typography, palette, shadows, components }

const theme = createTheme(defaultTheme)

export default theme
