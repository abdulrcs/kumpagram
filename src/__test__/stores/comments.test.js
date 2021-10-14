import store from 'stores'

describe('Comments Model', () => {
  beforeEach(() => {
    store.dispatch({ type: 'RESET_STORE' })
  })

  it('should fetch comments with post id of 1', async () => {
    await store.dispatch.comments.fetchComments(1)
    const state = store.getState()
    expect(state.comments.length).toBeGreaterThan(0)
  })

  it('should add comments', async () => {
    await store.dispatch.comments.postComment({
      postId: 1,
      id: 1,
      name: 'alias odio sit',
      email: 'Lew@alysha.tv',
      body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
    })

    const state = store.getState()
    expect(state.comments[0].name).toBe('alias odio sit')
  })

  it('should edit comments', async () => {
    const comment = {
      postId: 1,
      id: 1,
      name: 'old comment',
      email: 'Lew@alysha.tv',
      body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
    }

    await store.dispatch.comments.addComment(comment)
    const state = store.getState()
    expect(state.comments[0].name).toBe('old comment')

    const newComment = {
      postId: 1,
      id: 1,
      name: 'new comment',
      email: 'Lew@alysha.tv',
      body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
    }

    await store.dispatch.comments.editComment(newComment)
    const newState = store.getState()
    expect(newState.comments[0].name).toBe('new comment')
  })

  it('should delete comments', async () => {
    const comment = {
      postId: 1,
      id: 1,
      name: 'old comment',
    }

    await store.dispatch.comments.addComment(comment)
    const state = store.getState()
    expect(state.comments[0].name).toBe('old comment')

    await store.dispatch.comments.deleteComment(1)
    const newState = store.getState()
    expect(newState.comments.length).toBe(0)
  })
})
