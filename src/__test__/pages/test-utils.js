import { ChakraProvider, theme } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import PropTypes from 'prop-types'
import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import store from 'stores'

const AllProviders = ({ children }) => (
  <Provider store={store}>
    <MemoryRouter>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </MemoryRouter>
  </Provider>
)

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options })

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
}

export default customRender
