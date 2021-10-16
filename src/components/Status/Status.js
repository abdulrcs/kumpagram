import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { useSelector } from 'react-redux'
import StatusItem from './StatusItem'

export default function Status() {
  const store = useSelector(state => state)
  return (
    <HStack
      bg="white"
      border="1px solid #dbdbdb"
      borderRadius="3px"
      justifyContent="space-around"
      p={4}
      w="100%"
    >
      {/* Yes, I hardcoded these numbers from jsonplaceholder.typicode.com */}
      <StatusItem count={store.users.length} label="Users" />
      <StatusItem count={store.posts.posts.length} label="Posts" />
      <StatusItem count={store.albums.length} label="Albums" />
    </HStack>
  )
}
