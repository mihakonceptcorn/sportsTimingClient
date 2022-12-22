import sportsTimingApi from "@/lib/sportsTimingApi"
import { apiUrl } from "@/settings/config"
import VueJwtDecode from 'vue-jwt-decode'

export default {
  async setUserData(context) {
    let user = {};
    const token = localStorage.getItem('token').substring(6);
    const decoded = VueJwtDecode.decode(token)
    let response = await sportsTimingApi().get(apiUrl + '/user/' + decoded.userId);
    user = response.data.values[0];
    context.commit('setUserData', user);
  },
}