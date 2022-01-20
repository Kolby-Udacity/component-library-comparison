import type { SystemStyleObject } from '@chakra-ui/theme-tools'

export const Button: SystemStyleObject = {
  baseStyle: {
    padding: 2,
    borderRadius: 'base',
  },
  sizes: {
    small: {
      fontSize: '11px',
      lineHeight: '1rem',
    },
    md: {
      fontSize: 'sm',
    },
  },
  variants: {
    solid: {
      backgroundColor: 'blue',
      color: 'white',
      _hover: {
        backgroundColor: '#174a60',
      },
    },
    outline: {
      borderWidth: '2px',
      borderColor: 'blue',
      color: 'blue',
    },
  },
}
