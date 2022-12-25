export default {
  setUserData(state, user) {
    state.user = user
    state.isAuthorized = true
  },
  clearUserData(state) {
    state.user = {}
    state.isAuthorized = false
  }
}