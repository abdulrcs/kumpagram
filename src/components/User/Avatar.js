import { Avatar } from '@chakra-ui/avatar'
import { Box, HStack, Text } from '@chakra-ui/layout'
import Link from 'components/Common/Link'
import PropTypes from 'prop-types'
import React from 'react'

export default function User({ user, nameOnly }) {
  return (
    <HStack justifyContent="space-between" w="100%">
      <HStack space={2}>
        <Avatar size="sm" />
        <Box>
          <Text color="textPrimary" fontSize="sm" fontWeight="medium">
            {user.username}
          </Text>
          {!nameOnly && (
            <Text color="textSecondary" fontSize="xs">
              {user.email}
            </Text>
          )}
        </Box>
      </HStack>
      {!nameOnly && (
        <HStack space={2}>
          <Link to={`/users/${user.id}/posts`}>
            <Text color="textBlue" fontSize="xs" fontWeight="medium">
              Posts
            </Text>
          </Link>
          <Link to={`/users/${user.id}/albums`}>
            <Text color="textBlue" fontSize="xs" fontWeight="medium">
              Albums
            </Text>
          </Link>
        </HStack>
      )}
    </HStack>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  nameOnly: PropTypes.bool,
}
