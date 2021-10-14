import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import PropTypes from 'prop-types'

const AllProviders = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options })

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
}

export default customRender
