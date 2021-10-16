import { Text } from '@chakra-ui/layout'
import Link from 'components/Common/Link'
import PostCard from 'components/Post/PostCard'
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'

export default function PostsList({ isLimited, userId }) {
  const postStore = useSelector(state => state.posts.posts)
  let posts = userId ? postStore.filter(e => e.userId === userId) : postStore
  posts = isLimited ? posts.slice(0, 5) : posts

  const users = useSelector(state => state.users)
  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} post={post} user={users[post.userId - 1]} />
      ))}

      {isLimited && (
        <Link to="/posts">
          <Text color="textBlue">See more posts</Text>
        </Link>
      )}
    </>
  )
}

PostsList.propTypes = {
  isLimited: PropTypes.bool,
  userId: PropTypes.number,
}
