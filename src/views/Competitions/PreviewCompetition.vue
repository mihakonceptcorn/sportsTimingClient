<template>
  <TabView>
    <TabPanel header="Preview competition">
      <div class="surface-card p-4 w-full" v-if="isReady">
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
      <ConfirmPopup></ConfirmPopup>
      <div class="col-12 md:col-4">
        <ButtonComponent label="Start Timing!" icon="pi pi-flag" @click="confirm($event)"/>
      </div>
    </TabPanel>
    <TabPanel header="Competitors">
      <CompetitorsTable/>
    </TabPanel>
  </TabView>
  <TimingComponent
    v-if="isTiming"
    @close="closeTiming"
  />
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CompetitorsTable from '@/views/Competitions/CompetitorsTable'
import TimingComponent from '@/components/timing/TimingComponent'

export default {
  name: "PreviewCompetition",
  components: {
    CompetitorsTable,
    TimingComponent,
  },
  data() {
    return {
      isReady: false,
      isTiming: false,
    }
  },
  computed: {
    ...mapGetters('competition', ['competition'])
  },
  async created() {
    await this.getCompetitionById(this.$route.params.id)
    this.isReady = true
  },
  methods: {
    ...mapActions('competition', ['getCompetitionById']),
    confirm(event) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.isTiming = true
        },
        reject: () => {}
      });
    },
    closeTiming() {
      this.isTiming = false
    }
  }
}
</script>

<style scoped>

</style>