import axios from 'lib/axios'

const photos = {
  state: [],
  reducers: {
    setPhotos(state, payload) {
      return payload
    },
  },
  effects: dispatch => ({
    async fetchPhotos(payload) {
      const { data } = await axios.get(`/albums/${payload}/photos`)
      dispatch.photos.setPhotos(data)
    },
  }),
}

export default photos
