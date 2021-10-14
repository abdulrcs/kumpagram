import { ChakraProvider, theme } from '@chakra-ui/react'
import React from 'react'
import AppRoute from 'routes'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoute />
    </ChakraProvider>
  )
}

export default App
