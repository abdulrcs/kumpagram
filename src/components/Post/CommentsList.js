import { Text, VStack } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import useFetchComments from 'hooks/useFetchComments'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import AddComment from './AddComment'
import Comment from './Comment'

export default function CommentsList({ postId }) {
  const { comments, setComments, loaded } = useFetchComments(postId)
  const [showComments, setShowComments] = useState(false)

  return (
    <>
      {!showComments && (
        <Text
          color="textSecondary"
          cursor="pointer"
          fontSize="sm"
          pb={2}
          px={2}
          onClick={() => setShowComments(true)}
        >
          View all comments
        </Text>
      )}

      {showComments && (
        <VStack alignItems="flex-start" p={2} pt={2} space={2}>
          {!loaded && <Spinner />}
          {comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
              setComments={setComments}
            />
          ))}
        </VStack>
      )}

      <AddComment setComments={setComments} />
    </>
  )
}

CommentsList.propTypes = {
  postId: PropTypes.number.isRequired,
}
