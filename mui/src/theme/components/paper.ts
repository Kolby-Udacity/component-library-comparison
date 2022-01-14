import { ComponentsOverrides, ComponentsProps, ComponentsVariants } from '@mui/material'

export const MuiPaper: {
  defaultProps?: ComponentsProps['MuiPaper']
  styleOverrides?: ComponentsOverrides['MuiPaper']
  variants?: ComponentsVariants['MuiPaper']
} = {
  styleOverrides: {
    root: {
      borderRadius: '6px',
    },
  },
}
