import store from 'stores'

describe('Photos Model', () => {
  it('should fetch photos with album id of 1', async () => {
    await store.dispatch.photos.fetchPhotos(1)
    const state = store.getState()
    expect(state.photos.length).toBeGreaterThan(0)
    expect(state.photos[0].albumId).toBe(1)
  })
})
