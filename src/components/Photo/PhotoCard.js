import { Image } from '@chakra-ui/image'
import { Box, Text } from '@chakra-ui/layout'
import PropTypes from 'prop-types'
import React from 'react'

export default function PhotoCard({ photo }) {
  return (
    <>
      <Box bg="#fafafa" border="1px solid #dbdbdb" borderRadius="3px" w="350px">
        <Image h="350px" src={photo.url} w="350px" />
        <Text fontSize="sm" fontWeight="medium" p={4} textAlign="center">
          {photo.title}
        </Text>
      </Box>
    </>
  )
}

PhotoCard.propTypes = {
  photo: PropTypes.object.isRequired,
}
