<template>
  <h3>Competitions</h3>
  <div class="surface-card p-4 shadow-2 border-round w-full">
    <DataTable
      :value="competitions"
      :paginator="true"
      :rows="10"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="[10,20,50]"
      responsiveLayout="scroll"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    >
      <TableColumn field="id" header="Id"></TableColumn>
      <TableColumn field="date" header="Date"></TableColumn>
      <TableColumn field="name" header="Name"></TableColumn>
      <TableColumn field="stages" header="Stages"></TableColumn>
      <TableColumn field="rounds" header="Rounds In Stage"></TableColumn>
      <TableColumn field="finished" header="Finished"></TableColumn>
    </DataTable>
  </div>
</template>

<script>
export default {
  name: "CompetitionsView",
  data() {
    return {
      competitions: [
        {
          id: 1,
          date: new Date().toDateString(),
          name: 'Test',
          stages: 2,
          rounds: 2,
          finished: false
        },
        {
          id: 2,
          date: new Date().toDateString(),
          name: 'Test',
          stages: 2,
          rounds: 2,
          finished: false
        },
        {
          id: 3,
          date: new Date().toDateString(),
          name: 'Test',
          stages: 2,
          rounds: 2,
          finished: true
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>