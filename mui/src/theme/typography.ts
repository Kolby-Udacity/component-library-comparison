import { palette } from './palette'

export const typography = {
  fontFamily: '"Open Sans"',
  color: palette.textColor,
  logo: {
    fontSize: 24,
    fontFamily: '"Zen Dots"',
    color: palette.primary.main,
  },
  h2: {
    fontSize: 18,
    fontWeight: 700,
    color: palette.textColor,
  },
  h3: {
    fontSize: 11,
    fontWeight: 700,
    color: palette.primary.main,
  },
  small: {
    fontSize: 12,
    fontFamily: '"Open Sans"',
    lineHeight: '18px',
    color: palette.textColor,
  },
  tiny: {
    fontSize: 9,
    fontFamily: '"Open Sans"',
    color: palette.textColor,
  },
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    logo: true
    small: true
    tiny: true
  }
}
