import mutations from "./mutations";
import actions from "./actions";
import * as getters from "./getters";

const initialState = {
  user: {},
  isAuthorized: false,
}

export default {
  namespaced: true,
  state: initialState,
  mutations: mutations,
  actions: actions,
  getters: getters
}