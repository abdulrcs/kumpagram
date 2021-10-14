const reducers = {
  setComments(state, payload) {
    return payload
  },

  addComment(state, payload) {
    return [...state, payload]
  },

  deleteComment(state, payload) {
    return state.filter(comment => comment.id !== payload)
  },

  editComment(state, payload) {
    return state.map(comment => {
      if (comment.id === payload.id) {
        return payload
      }
      return comment
    })
  },
}

export default reducers
