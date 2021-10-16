import { VStack } from '@chakra-ui/layout'
import AlbumsList from 'components/Album/AlbumsList'
import React from 'react'
import { useParams } from 'react-router'

export default function Albums() {
  const { id } = useParams()
  return (
    <VStack>
      <VStack spacing={4} w="70%">
        <AlbumsList userId={parseInt(id, 10)} />
      </VStack>
    </VStack>
  )
}
