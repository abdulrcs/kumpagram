import axios from 'lib/axios'

const effects = dispatch => ({
  async fetchComments(payload) {
    const { data } = await axios.get(`/posts/${payload}/comments`)
    dispatch.comments.setComments(data)
  },

  async postComment(payload) {
    const { data } = await axios.post(
      `/posts/${payload.postId}/comments`,
      payload
    )
    dispatch.comments.addComment(data)
  },
})

export default effects
