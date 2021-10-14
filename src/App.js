import { ChakraProvider, theme } from '@chakra-ui/react'
import React from 'react'
import { Provider } from 'react-redux'
import AppRoute from 'routes'
import store from 'stores'

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <AppRoute />
      </ChakraProvider>
    </Provider>
  )
}

export default App
