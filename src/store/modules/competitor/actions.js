import sportsTimingApi from "@/lib/sportsTimingApi"
import { apiUrl } from "@/settings/config"

export default {
  async getCompetitorsByCompetitionId(context, competitionId) {
    const response = await sportsTimingApi().get(apiUrl + '/competitors/' + competitionId)
    const competitors = response.data.values
    context.commit('setCompetitors', competitors)
    return competitors
  },
  async addCompetitor(context, competitor) {
    const response = await sportsTimingApi().post(apiUrl + '/competitors/add', competitor)
    return response.data
  }
}