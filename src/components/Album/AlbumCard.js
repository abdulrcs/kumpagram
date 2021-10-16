import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import Link from 'components/Common/Link'
import PropTypes from 'prop-types'
import React from 'react'
import { IoMdPhotos } from 'react-icons/io'

export default function AlbumCard({ album, user }) {
  return (
    <Link to={`/albums/${album.id}`}>
      <Box bg="white" border="1px solid #dbdbdb" borderRadius="3px" w="100%">
        <Box p={2}>
          <HStack space={2}>
            <IoMdPhotos size="16px" />
            <Text fontSize="sm" fontWeight="medium">
              Album by {user.username}
            </Text>
          </HStack>
        </Box>
        <VStack
          alignItems="center"
          bg="linear-gradient(to right, #8a2387, #e94057, #f27121)"
          h="350px"
          justifyContent="center"
          w="100%"
        >
          <Text color="white" fontWeight="medium" px={2} textAlign="center">
            {album.title}
          </Text>
        </VStack>
      </Box>
    </Link>
  )
}

AlbumCard.propTypes = {
  album: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}
