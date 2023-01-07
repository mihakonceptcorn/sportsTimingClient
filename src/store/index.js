import { createStore } from 'vuex'
import user from "@/store/modules/user/user"
import competition from "@/store/modules/competition/competition"

export default createStore({
  modules: {
    user,
    competition,
  }
})
