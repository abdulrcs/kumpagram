import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { VStack } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function EditModal({ post, isOpen, onClose }) {
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.body)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch.posts.editPost({
      ...post,
      id: post.id,
      body: content,
      title,
    })
    onClose()
  }
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

EditModal.propTypes = {
  post: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
