import type { SystemStyleObject } from '@chakra-ui/theme-tools'

const inputBaseStyles = {
  borderRadius: '4px',
  height: '48px',
  boxShadow: 'base',
  fontSize: 'sm',
}

export const Input: SystemStyleObject = {
  baseStyle: {
    field: {},
  },
  defaultProps: {
    borderColor: 'divider',
  },
  sizes: {
    md: {
      field: inputBaseStyles,
    },
  },
}

export const Select: SystemStyleObject = {
  sizes: {
    md: {
      field: inputBaseStyles,
    },
  },
}

export const FormLabel: SystemStyleObject = {
  baseStyle: {
    fontSize: 'sm',
    fontWeight: 'normal',
    marginBottom: 0,
    lineHeight: '28px',
  },
}
