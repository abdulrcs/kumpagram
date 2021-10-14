import store from 'stores'

describe('Users Model', () => {
  it('should fetch users', async () => {
    await store.dispatch.users.fetchUsers()
    const state = store.getState()
    expect(state.users.length).toBeGreaterThan(0)
  })
})
