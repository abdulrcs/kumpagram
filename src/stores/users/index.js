import axios from 'lib/axios'

const users = {
  state: [],
  reducers: {
    addUsers(state, payload) {
      return payload
    },
  },
  effects: dispatch => ({
    async fetchUsers() {
      const { data } = await axios.get('/users')
      dispatch.users.addUsers(data)
    },
  }),
}

export default users
