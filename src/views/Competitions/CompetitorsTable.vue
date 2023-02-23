<template>
  <div class="surface-card p-4 shadow-2 border-round w-full">
    <DataTable
      v-if="isReady"
      :value="competitors"
      :paginator="true"
      :rows="10"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[10,20,50]"
      responsiveLayout="scroll"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    >
      <template #header>
        <div class="table-header">
          <ButtonComponent label="Add Competitor" icon="pi pi-user-plus" @click.prevent="goToAdd()"/>
        </div>
      </template>
      <TableColumn field="id" header="Id"></TableColumn>
      <TableColumn field="second_name" header="Second Name"></TableColumn>
      <TableColumn field="gender" header="Gender"></TableColumn>
      <TableColumn field="category" header="Category"></TableColumn>
      <TableColumn field="dob" header="DOB"></TableColumn>
      <TableColumn field="team" header="Team"></TableColumn>
      <TableColumn field="country" header="Country"></TableColumn>
      <TableColumn field="region" header="Region"></TableColumn>
      <TableColumn field="locality" header="Locality"></TableColumn>
      <TableColumn field="competition_number" header="Number"></TableColumn>
    </DataTable>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CompetitorsTable",
  data() {
    return {
      isReady: false,
    }
  },
  computed: {
    ...mapGetters('competitor', ['competitors'])
  },
  async created() {
    const competitionId = this.$route.params.id
    await this.getCompetitorsByCompetitionId(competitionId)
    this.isReady = true
  },
  methods: {
    ...mapActions('competitor', ['getCompetitorsByCompetitionId']),
    goToAdd() {
      this.$router.push({name: 'addCompetitor'})
    },
  },
}
</script>

<style scoped>

</style>