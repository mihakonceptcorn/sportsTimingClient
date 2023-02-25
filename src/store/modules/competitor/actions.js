import sportsTimingApi from "@/lib/sportsTimingApi"
import { apiUrl } from "@/settings/config"

export default {
  async getCompetitorsByCompetitionId(context, competitionId) {
    let competitors = [];
    sportsTimingApi()
      .get(apiUrl + '/competitors/' + competitionId)
      .then(response => {
        competitors = response.data.values
        context.commit('setCompetitors', competitors)
      })
  },
  async addCompetitor(context, competitor) {
    const response = await sportsTimingApi().post(apiUrl + '/competitors/add', competitor)
    return response.data
  }
}