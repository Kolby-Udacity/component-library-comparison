import { ComponentsOverrides, ComponentsProps, ComponentsVariants } from '@mui/material'

import { palette } from '../palette'
import { shadows } from '../shadows'

const inputBaseStyles = {
  borderRadius: '4px',
  padding: '0 20px',
  height: '48px',
  fontSize: '.875rem',
  '&:focus': {
    borderRadius: '4px',
    backgroundColor: 'white',
  },
}
export const MuiInputBase: {
  defaultProps?: ComponentsProps['MuiInputBase']
  styleOverrides?: ComponentsOverrides['MuiInputBase']
  variants?: ComponentsVariants['MuiInputBase']
} = {
  styleOverrides: {
    root: {
      paddingRight: '0 !important',
      input: inputBaseStyles,
      select: {
        ...inputBaseStyles,
        border: `solid 1px ${palette.divider}`,
        boxShadow: shadows[4],
        height: '46px',
      },
      fieldset: {
        border: `solid 1px ${palette.divider}`,
        boxShadow: shadows[4],
      },
      '.MuiIconButton-root': {
        marginRight: 0,
      },
      '&:before, &:after': {
        display: 'none',
      },
      '&.Mui-focused, &:hover': {
        fieldset: {
          border: `solid 1px ${palette.divider} !important`,
        },
      },
      'select[aria-invalid="true"]': {
        border: '1px solid #d32f2f',
      },
    },
  },
}

export const MuiInputLabel: {
  defaultProps?: ComponentsProps['MuiInputLabel']
  styleOverrides?: ComponentsOverrides['MuiInputLabel']
  variants?: ComponentsVariants['MuiInputLabel']
} = {
  styleOverrides: {
    root: {
      fontSize: '14px',
      lineHeight: '28px',
      color: palette.textColor,
    },
  },
}
