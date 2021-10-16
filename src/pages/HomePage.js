import { HStack, VStack } from '@chakra-ui/layout'
import AddPost from 'components/Post/AddPost'
import PostsList from 'components/Post/PostsList'
import Status from 'components/Status/Status'
import UserList from 'components/User/UserList'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const store = useSelector(state => state)
  const { users, posts, albums } = store

  return (
    <>
      <HStack alignItems="flex-start" justifyContent="center" spacing={8}>
        <VStack w={{ base: '100%', md: '70%' }}>
          <Status data={(users, posts, albums)} />
          <AddPost />
          <PostsList isLimited />
        </VStack>
        <UserList isLimited users={users} />
      </HStack>
    </>
  )
}
