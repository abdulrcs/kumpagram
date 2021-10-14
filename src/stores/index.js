import { init } from '@rematch/core'
import albums from 'stores/albums'
import comments from 'stores/comments'
import photos from 'stores/photos'
import posts from 'stores/posts'
import users from 'stores/users'

const store = init({
  models: {
    users,
    posts,
    albums,
    comments,
    photos,
  },
  redux: {
    devtoolOptions: {},
    rootReducers: { RESET_STORE: () => undefined },
  },
})

export default store
