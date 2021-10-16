import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Text, VStack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function AddPost() {
  const [editMode, setEditMode] = useState(false)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const handleClick = async () => {
    await dispatch.posts.addPost({
      id: 239203,
      title,
      body: content,
      isOwner: true,
    })

    setEditMode(false)
  }
  return (
    <>
      {!editMode && (
        <VStack
          _hover={{
            bg: 'gray.100',
          }}
          bg="white"
          border="1px solid #dbdbdb"
          borderRadius="3px"
          cursor="pointer"
          justifyContent="space-around"
          p={4}
          transition="all 0.3s"
          w="100%"
          onClick={() => setEditMode(true)}
        >
          <Text fontSize="lg" fontWeight="medium">
            + Add Post
          </Text>
        </VStack>
      )}

      {editMode && (
        <VStack
          bg="white"
          border="1px solid #dbdbdb"
          borderRadius="3px"
          p={4}
          w="100%"
        >
          <Input
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Input
            placeholder="Content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <Button colorScheme="blue" w="100%" onClick={handleClick}>
            Submit
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            w="100%"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </Button>
        </VStack>
      )}
    </>
  )
}
