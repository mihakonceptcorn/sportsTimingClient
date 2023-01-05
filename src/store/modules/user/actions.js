import sportsTimingApi from "@/lib/sportsTimingApi"
import { apiUrl } from "@/settings/config"
import VueJwtDecode from 'vue-jwt-decode'

export default {
  async setUserData(context) {
    let user = {};
    const token = localStorage.getItem('token').substring(6);
    const decoded = VueJwtDecode.decode(token)
    sportsTimingApi()
      .get(apiUrl + '/user/' + decoded.userId)
      .then(response => {
        user = response.data.values[0]
        context.commit('setUserData', user)
      })
      .catch(error => {
        if (error.response.status === 401) {
          context.dispatch('logoutUser')
        } else {
          console.warn(error)
        }
      })
  },
  logoutUser(context) {
    localStorage.setItem('token', '')
    context.commit('clearUserData')
  }
}