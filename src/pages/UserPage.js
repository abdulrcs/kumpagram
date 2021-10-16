import { VStack } from '@chakra-ui/layout'
import UserList from 'components/User/UserList'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Users() {
  const users = useSelector(state => state.users)
  return (
    <VStack>
      <UserList users={users} />
    </VStack>
  )
}
