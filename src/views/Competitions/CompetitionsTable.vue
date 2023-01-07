<template>
  <h3>Competitions</h3>
  <div class="surface-card p-4 shadow-2 border-round w-full">
    <DataTable
      v-if="isReady"
      :value="competitions"
      :paginator="true"
      :rows="10"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[10,20,50]"
      responsiveLayout="scroll"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    >
      <template #header>
        <div class="table-header">
          <ButtonComponent label="Create" icon="pi pi-flag" @click.prevent="goToCreate()"/>
        </div>
      </template>
      <TableColumn field="id" header="Id"></TableColumn>
      <TableColumn field="name" header="Name">
        <template #body="slotProps">
          <a href="#" @click.prevent="goToPreview(slotProps.data.id)">{{slotProps.data.name}}</a>
        </template>
      </TableColumn>
      <TableColumn field="country" header="Country"></TableColumn>
      <TableColumn field="city" header="City"></TableColumn>
      <TableColumn field="location" header="Location"></TableColumn>
      <TableColumn field="date" header="Date"></TableColumn>
      <TableColumn field="stages" header="Stages"></TableColumn>
      <TableColumn field="rounds" header="Rounds In Stage"></TableColumn>
      <TableColumn field="finished" header="Finished"></TableColumn>
    </DataTable>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CompetitionsTable",
  data() {
    return {
      isReady: false
    }
  },
  computed: {
    ...mapGetters('competition', ['competitions'])
  },
  async created() {
    await this.getUserCompetitions()
    this.isReady = true
  },
  methods: {
    ...mapActions('competition', ['getUserCompetitions']),
    goToCreate() {
      this.$router.push({name: 'createCompetition'})
    },
    goToPreview(id) {
      console.log(id)
    }
  },
}
</script>

<style scoped>

</style>