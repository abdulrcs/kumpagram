import React from 'react'
import { ChakraProvider, Text, theme } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Text>Hello World</Text>
    </ChakraProvider>
  )
}

export default App
