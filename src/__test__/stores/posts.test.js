import store from 'stores'

describe('Posts Model', () => {
  beforeEach(() => {
    store.dispatch({ type: 'RESET_STORE' })
  })

  it('should fetch all posts', async () => {
    await store.dispatch.posts.fetchPosts()
    const state = store.getState()
    expect(state.posts.posts.length).toBeGreaterThan(1)
  })

  it('should fetch post with id of 1', async () => {
    await store.dispatch.posts.fetchPost(1)
    const state = store.getState()
    expect(state.posts.post.id).toBe(1)
  })

  it('should add a post', async () => {
    const post = {
      title: 'test post',
      body: 'test post body',
    }
    await store.dispatch.posts.addPost(post)
    const state = store.getState()
    expect(state.posts.posts.length).toBeGreaterThan(0)
  })

  it('should edit a post', async () => {
    const post = {
      id: 1,
      title: 'test post',
      body: 'test post body',
    }

    await store.dispatch.posts.addPost(post)

    const newPost = {
      id: 1,
      title: 'test post new',
      body: 'test post body new',
    }

    await store.dispatch.posts.editPost(newPost)

    const newState = store.getState()
    expect(newState.posts.posts[0].title).toBe('test post new')
  })

  it('should delete a post', async () => {
    const post = {
      title: 'test post',
      body: 'test post body',
    }

    await store.dispatch.posts.addPost(post)

    const state = store.getState()
    const postId = state.posts.posts[0].id

    await store.dispatch.posts.deletePost(postId)

    const newState = store.getState()
    expect(newState.posts.posts.length).toBe(0)
  })
})
