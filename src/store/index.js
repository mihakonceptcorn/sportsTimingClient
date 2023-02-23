import { createStore } from 'vuex'
import user from "@/store/modules/user/user"
import competition from "@/store/modules/competition/competition"
import competitor from "@/store/modules/competitor/competitor"

export default createStore({
  modules: {
    user,
    competition,
    competitor,
  }
})
