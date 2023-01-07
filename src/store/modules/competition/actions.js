import sportsTimingApi from "@/lib/sportsTimingApi"
import { apiUrl } from "@/settings/config"
import VueJwtDecode from 'vue-jwt-decode'

export default {
  async getUserCompetitions(context) {
    let competitions = [];
    const token = localStorage.getItem('token').substring(6)
    const decoded = VueJwtDecode.decode(token)
    sportsTimingApi()
      .get(apiUrl + '/competitions/' + decoded.userId)
      .then(response => {
        competitions = response.data.values
        context.commit('setCompetitions', competitions)
      })
  },
}