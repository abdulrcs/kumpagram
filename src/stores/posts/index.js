import effects from './effects'
import reducers from './reducers'

const posts = {
  state: {
    posts: [],
    post: {},
  },
  reducers,
  effects,
}

export default posts
