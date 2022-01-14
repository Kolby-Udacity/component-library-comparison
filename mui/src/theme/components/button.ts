import { ComponentsOverrides, ComponentsProps, ComponentsVariants } from '@mui/material'

import { palette } from '../palette'

export const MuiButton: {
  defaultProps?: ComponentsProps['MuiButton']
  styleOverrides?: ComponentsOverrides['MuiButton']
  variants?: ComponentsVariants['MuiButton']
} = {
  defaultProps: {
    variant: 'contained',
  },
  styleOverrides: {
    root: {
      padding: '8px',
      textTransform: 'none',
      fontWeight: 600,
      boxShadow: 'none',
    },
  },
  variants: [
    {
      props: { size: 'small' },
      style: { fontSize: 11 },
    },
    {
      props: { variant: 'outlined' },
      style: {
        borderWidth: 2,
        borderColor: palette.primary.main,
        '&:hover': {
          borderWidth: 2,
        },
      },
    },
  ],
}

export const MuiButtonBase: {
  defaultProps?: ComponentsProps['MuiButton']
  styleOverrides?: ComponentsOverrides['MuiButton']
  variants?: ComponentsVariants['MuiButton']
} = {
  defaultProps: {
    disableRipple: true,
  },
}
