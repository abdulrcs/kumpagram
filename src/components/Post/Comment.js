import { Avatar } from '@chakra-ui/avatar'
import { Input } from '@chakra-ui/input'
import { Box, HStack, Text } from '@chakra-ui/layout'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

export default function Comment({ comment, setComments }) {
  const { id, email, body, isOwner } = comment
  const name = email.slice(0, comment.email.indexOf('@'))

  const [editMode, setEditMode] = useState(false)
  const [newBody, setNewBody] = useState(body)

  const handleDelete = () => {
    setComments(comments => comments.filter(c => c.id !== id))
  }

  const handleEdit = () => {
    setComments(prev =>
      prev.map(c => {
        if (c.id === id) {
          return { ...c, body: newBody }
        }
        return c
      })
    )
    setEditMode(false)
  }

  return (
    <HStack justifyContent="space-between" w="100%">
      <HStack alignItems="center" space={2}>
        <Avatar size="xs" />
        <Text fontSize="xs">
          <Box as="span" fontWeight="medium">
            {name}{' '}
          </Box>
          {!editMode && body}
          {editMode && (
            <HStack>
              <Input
                size="xs"
                value={newBody}
                onChange={e => setNewBody(e.target.value)}
              />
              <Text color="textBlue" cursor="pointer" onClick={handleEdit}>
                Submit
              </Text>
            </HStack>
          )}
        </Text>
      </HStack>
      {isOwner && (
        <HStack>
          <Text
            color="textBlue"
            cursor="pointer"
            fontSize="xs"
            onClick={() => setEditMode(true)}
          >
            Edit
          </Text>
          <Text
            color="textRed"
            cursor="pointer"
            fontSize="xs"
            onClick={handleDelete}
          >
            Delete
          </Text>
        </HStack>
      )}
    </HStack>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  setComments: PropTypes.func.isRequired,
}
