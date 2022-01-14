import { ComponentsOverrides, ComponentsProps, ComponentsVariants } from '@mui/material'

import { palette } from '../palette'

export const MuiInputBase: {
  defaultProps?: ComponentsProps['MuiInputBase']
  styleOverrides?: ComponentsOverrides['MuiInputBase']
  variants?: ComponentsVariants['MuiInputBase']
} = {
  styleOverrides: {
    root: {
      paddingRight: '0 !important',
      input: {
        borderRadius: '4px',
        padding: '0 20px',
        height: '48px',
        color: '#6d7780',
        fontSize: '.875rem',
        '&:focus': {
          borderRadius: '4px',
          backgroundColor: 'white',
        },
      },
      select: {
        border: `solid 1px ${palette.divider}`,
        borderRadius: '4px',
        boxShadow: '5px 5px 10px 0 rgba(46, 61, 73, .05)',
        padding: '0 20px',
        height: '48px',
        color: '#6d7780',
        fontSize: '.875rem',
        '&:focus': {
          borderRadius: '4px',
          backgroundColor: 'white',
        },
      },
      fieldset: {
        border: `solid 1px ${palette.divider}`,
        boxShadow: '5px 5px 10px 0 rgba(46, 61, 73, .05)',
      },
      '.MuiInputAdornment-root': {
        height: '48px',
        maxHeight: '48px',
        width: '48px',
        backgroundColor: 'white',
        margin: 0,
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
