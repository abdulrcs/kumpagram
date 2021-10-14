import axios from 'lib/axios'

const effects = dispatch => ({
  async fetchPosts() {
    const { data } = await axios.get('/posts')
    dispatch.posts.setPosts(data)
  },

  async fetchPost(id) {
    const { data } = await axios.get(`/posts/${id}`)
    dispatch.posts.setPost(data)
  },
})

export default effects
