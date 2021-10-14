import store from 'stores'

describe('Albums Model', () => {
  it('should fetch an albums', async () => {
    await store.dispatch.albums.fetchAlbums()

    const state = store.getState()

    expect(state.albums.length).toBeGreaterThan(0)
  })
})
