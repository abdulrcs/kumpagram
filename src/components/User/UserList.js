import { HStack, Text, VStack } from '@chakra-ui/layout'
import Link from 'components/Common/Link'
import Avatar from 'components/User/Avatar'
import PropTypes from 'prop-types'
import React from 'react'

export default function UserList({ users, isLimited }) {
  return (
    <VStack
      alignItems="flex-start"
      display={{ base: isLimited ? 'none' : 'flex', lg: 'flex' }}
      spacing={4}
      w={{ base: '80%', md: '50%' }}
    >
      <HStack justifyContent="space-between" w="100%">
        <Text color="textSecondary" fontSize="sm" fontWeight="medium">
          Suggestion For You
        </Text>
        {isLimited && (
          <Link to="/users">
            <Text color="textPrimary" fontSize="xs" fontWeight="medium">
              See All
            </Text>
          </Link>
        )}
      </HStack>

      <VStack alignItems="flex-start" spacing={2} w="100%">
        {isLimited
          ? users.slice(0, 5).map(user => <Avatar withEmail user={user} />)
          : users.map(user => <Avatar withEmail user={user} />)}
      </VStack>
    </VStack>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  isLimited: PropTypes.bool,
}
