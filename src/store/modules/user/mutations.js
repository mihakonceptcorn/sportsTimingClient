export default {
  setUserData(state, user) {
    state.user = user;
    state.isAuthorized = true;
  }
}