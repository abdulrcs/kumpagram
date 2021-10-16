import { VStack } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import React from 'react'

export default function Loading() {
  return (
    <VStack alignItems="center" h="72vh" justifyContent="center" w="100%">
      <Spinner size="xl" />
    </VStack>
  )
}
