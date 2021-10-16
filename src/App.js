import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Provider } from 'react-redux'
import AppRoute from 'routes'
import store from 'stores'
import theme from 'theme'

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <AppRoute />
      </ChakraProvider>
    </Provider>
  )
}

export default App
