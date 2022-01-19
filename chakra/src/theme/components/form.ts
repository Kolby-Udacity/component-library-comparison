const inputBaseStyles = {
  borderRadius: '4px',
  height: '48px',
  boxShadow: 'base',
  fontSize: 'sm',
}

export const Input = {
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

export const Select = {
  sizes: {
    md: {
      field: inputBaseStyles,
    },
  },
}

export const FormLabel = {
  baseStyle: {
    fontSize: 'sm',
    fontWeight: 'normal',
    marginBottom: 0,
    lineHeight: '28px',
  },
}
