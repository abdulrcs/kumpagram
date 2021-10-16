import { Input } from '@chakra-ui/input'
import { HStack, Text } from '@chakra-ui/layout'
import PropTypes from 'prop-types'
import React from 'react'

export default function AddComment({ setComments }) {
  const [comment, setComment] = React.useState('')

  const handleClick = () => {
    setComments(prev => [
      ...prev,
      {
        id: Math.random() * 100,
        email: 'You@gmail.com',
        body: comment,
        isOwner: true,
      },
    ])
    setComment('')
  }

  return (
    <HStack
      borderTop="1px solid #dbdbdb"
      justifyContent="space-between"
      px={4}
      py={2}
    >
      <Input
        _placeholder={{
          fontSize: 'sm',
        }}
        placeholder="Add a comment..."
        value={comment}
        variant="unstyled"
        onChange={e => setComment(e.target.value)}
      />
      <Text
        color="textBlue"
        cursor="pointer"
        fontSize="sm"
        fontWeight="medium"
        onClick={handleClick}
      >
        Post
      </Text>
    </HStack>
  )
}

AddComment.propTypes = {
  setComments: PropTypes.func.isRequired,
}
