const reducers = {
  setPosts(state, payload) {
    return {
      ...state,
      posts: payload,
    }
  },

  setPost(state, payload) {
    return {
      ...state,
      post: payload,
    }
  },

  addPost(state, payload) {
    return {
      ...state,
      posts: [payload, ...state.posts],
    }
  },

  editPost(state, payload) {
    const posts = state.posts.map(post => {
      if (post.id === payload.id) {
        return payload
      }
      return post
    })

    return {
      ...state,
      posts,
    }
  },

  deletePost(state, payload) {
    return {
      ...state,
      posts: state.posts.filter(post => post.id !== payload),
    }
  },
}

export default reducers
