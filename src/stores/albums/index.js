import axios from 'lib/axios'

const albums = {
  state: [],
  reducers: {
    addAlbums(state, payload) {
      return payload
    },
  },
  effects: dispatch => ({
    async fetchAlbums() {
      const { data } = await axios.get('/albums')
      dispatch.albums.addAlbums(data)
    },
  }),
}

export default albums
