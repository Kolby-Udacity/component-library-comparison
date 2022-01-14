export const palette = {
  primary: {
    main: '#006F8E',
  },
  secondary: {
    main: '#9A49D4',
  },
  textColor: '#2e3d49',
  lightBlue: '#F5FAFD',
  divider: '#DBE2E8',
  contrastThreshold: 3,
  tonalOffset: 0.2,
}

declare module '@mui/material/styles' {
  interface Palette {
    textColor: string
    lightBlue: string
    divider: string
  }
}
