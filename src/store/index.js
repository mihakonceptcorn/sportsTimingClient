import { createStore } from 'vuex'
import user from "@/store/modules/user/user";

export default createStore({
  modules: {
    user,
  }
})
