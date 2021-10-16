import { extendTheme, theme as chakraTheme } from '@chakra-ui/react'

const colors = {
  background: '#fafafa',
  textPrimary: '#262626',
  textSecondary: '#8e8e8e',
  textBlue: '#0095f6',
  textRed: '#ed4956',
}

const Link = {
  baseStyle: {
    outline: 'none',
    _focus: {
      outline: 'none',
    },
  },
}

const Text = {
  variants: {
    link: {
      color: 'white',
      fontWeight: 'medium',
      fontSize: 'sm',
      _hover: { color: '#e50914', textDecoration: 'none' },
    },
    display: {
      fontSize: '2xl',
      fontWeight: 'medium',
    },
    primary: {
      color: '#fff',
      fontSize: 'sm',
      fontWeight: 'medium',
    },
    secondary: {
      color: '#7f7e7e',
      fontSize: 'xs',
      fontWeight: 'medium',
    },
  },
}

const overrides = {
  ...chakraTheme,
  components: {
    Text,
    Link,
  },
  colors,
}

const customTheme = extendTheme(overrides)

export default customTheme
