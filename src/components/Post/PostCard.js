import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/react'
import EditModal from 'components/Post/EditModal'
import PostIcon from 'components/Post/PostIcon'
import Avatar from 'components/User/Avatar'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'
import CommentsList from './CommentsList'

export default function PostCard({ post, user }) {
  const dispatch = useDispatch()
  const [deletePost, setDeletePost] = React.useState(false)

  const { onOpen, isOpen, onClose } = useDisclosure()

  const handleDelete = () => {
    setDeletePost(true)
    setTimeout(() => {
      dispatch.posts.deletePost(post.id)
    }, 500)
  }

  return (
    <>
      <EditModal isOpen={isOpen} post={post} onClose={onClose} />

      <Box
        bg="white"
        border="1px solid #dbdbdb"
        borderRadius="3px"
        minW="400px"
        opacity={deletePost ? 0 : 1}
        transform={deletePost ? 'scale(0) rotate(20deg)' : 'scale(1)'}
        transition="all 0.5s ease-in-out"
        w="100%"
      >
        <Box p={2}>
          <HStack justifyContent="space-between">
            <Avatar
              nameOnly
              user={
                !post.isOwner
                  ? user
                  : {
                      username: 'You',
                    }
              }
            />
            <HStack space={2}>
              <Text
                color="textBlue"
                cursor="pointer"
                fontSize="sm"
                onClick={onOpen}
              >
                Edit
              </Text>
              <Text
                color="textRed"
                cursor="pointer"
                fontSize="sm"
                onClick={handleDelete}
              >
                Delete
              </Text>
            </HStack>
          </HStack>
        </Box>
        <VStack
          alignItems="center"
          bg="linear-gradient(to right, #8a2387, #e94057, #f27121)"
          h="350px"
          justifyContent="center"
          w="100%"
        >
          <Text color="white" fontWeight="medium" p={2} textAlign="center">
            {post.title}
          </Text>
        </VStack>
        <PostIcon />
        <Text fontSize="sm" p={2} pb={0}>
          <Box as="span" fontWeight="medium">
            {!post.isOwner && user.username} {post.isOwner && 'You'}{' '}
          </Box>
          {post.body}
        </Text>
        <CommentsList postId={post.id} />
      </Box>
    </>
  )
}

PostCard.propTypes = {
  user: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
}
