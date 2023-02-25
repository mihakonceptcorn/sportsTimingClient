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
  async getCompetitionById(context, competitionId) {
    const competition = await sportsTimingApi().get(apiUrl + '/competition/' + competitionId)
    context.commit('setCompetition', competition.data.values[0])
  },
  async createCompetition(context, competition) {
    const token = localStorage.getItem('token').substring(6)
    const decoded = VueJwtDecode.decode(token)
    competition.userId = decoded.userId
    const response = await sportsTimingApi().post(apiUrl + '/competition/create', competition)
    return response.data
  }
}