<template>
  <div class="surface-card p-4 shadow-2 border-round w-full" v-if="isReady">
    <h3>{{competition.name}}</h3>
    <p>country: {{competition.country}}</p>
    <p>city: {{competition.city}}</p>
    <p>location: {{competition.location}}</p>
    <p>date: {{competition.date}}</p>
    <p>stages: {{competition.stages}}</p>
    <p>rounds: {{competition.rounds}}</p>
    <p>description: {{competition.description}}</p>
    <p>finished: {{competition.finished}}</p>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PreviewCompetition",
  data() {
    return {
      isReady: false,
    }
  },
  computed: {
    ...mapGetters('competition', ['competition'])
  },
  async created() {
    await this.getUCompetitionById(this.$route.params.id)
    this.isReady = true
  },
  methods: {
    ...mapActions('competition', ['getUCompetitionById'])
  }
}
</script>

<style scoped>

</style>