import { VStack } from '@chakra-ui/layout'
import PhotoList from 'components/Photo/PhotoList'
import React from 'react'

export default function Photos() {
  return (
    <VStack alignItems="center" justifyContent="center">
      <PhotoList />
    </VStack>
  )
}
