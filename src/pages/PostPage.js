import { VStack } from '@chakra-ui/layout'
import PostsList from 'components/Post/PostsList'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Posts() {
  const { id } = useParams()
  return (
    <VStack>
      <VStack spacing={4} w="70%">
        <PostsList userId={parseInt(id, 10)} />
      </VStack>
    </VStack>
  )
}
